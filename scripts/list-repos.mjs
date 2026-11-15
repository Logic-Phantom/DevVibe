// Logic-Phantom의 공개 저장소 이름을 한 줄에 하나씩 출력합니다.
// 클라우드 세션에서는 api.github.com의 사용자 단위 엔드포인트가 막혀 있어서
// github.com 공개 페이지 → 활동 피드 → projects.ts 순서로 시도합니다.
// 사용법: node scripts/list-repos.mjs   (stderr에 어느 출처를 썼는지 적습니다)
import { readFile } from 'node:fs/promises';

const USER = 'Logic-Phantom';
const NAME = /^[A-Za-z0-9._-]+$/;

async function fromRepositoriesPage() {
  const names = new Set();
  for (let page = 1; page <= 5; page++) {
    const res = await fetch(`https://github.com/${USER}?tab=repositories&type=source&page=${page}`);
    if (!res.ok) break;
    const html = await res.text();
    const found = [...html.matchAll(new RegExp(`href="/${USER}/([A-Za-z0-9._-]+)"`, 'g'))].map((m) => m[1]);
    const before = names.size;
    found.forEach((n) => names.add(n));
    if (names.size === before) break;
  }
  return [...names];
}

async function fromAtomFeed() {
  const res = await fetch(`https://github.com/${USER}.atom`);
  if (!res.ok) return [];
  const xml = await res.text();
  return [...new Set([...xml.matchAll(new RegExp(`${USER}/([A-Za-z0-9._-]+)`, 'g'))].map((m) => m[1]))];
}

async function fromProjectsFile() {
  const src = await readFile('src/data/projects.ts', 'utf8');
  return [...new Set([...src.matchAll(/repo: '([^']+)'/g)].map((m) => m[1]))];
}

const sources = [
  ['repositories page', fromRepositoriesPage],
  ['atom feed', fromAtomFeed],
  ['projects.ts', fromProjectsFile],
];

const all = new Set();
for (const [label, fn] of sources) {
  try {
    const names = (await fn()).filter((n) => NAME.test(n) && n !== USER);
    console.error(`${label}: ${names.length}`);
    names.forEach((n) => all.add(n));
    // 전체 목록을 준 첫 출처가 있으면 projects.ts만 덧붙이고 끝냅니다.
    if (label === 'repositories page' && names.length > 0) {
      (await fromProjectsFile()).forEach((n) => all.add(n));
      break;
    }
  } catch (e) {
    console.error(`${label}: failed (${e.message})`);
  }
}

console.log([...all].sort((a, b) => a.localeCompare(b)).join('\n'));
