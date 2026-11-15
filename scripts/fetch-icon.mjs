// 저장소의 앱 아이콘을 받아 public/apps/<id>.webp (160px)로 저장합니다.
// 사용법: node scripts/fetch-icon.mjs <id> <repo> <저장소 안 아이콘 경로>
// 예:     node scripts/fetch-icon.mjs sizenote SizeNote assets/brand/console-icon-600.png
import { writeFile } from 'node:fs/promises';

const [id, repo, path] = process.argv.slice(2);
if (!id || !repo || !path) {
  console.error('usage: node scripts/fetch-icon.mjs <id> <repo> <path-in-repo>');
  process.exit(1);
}
if (!/^[a-z0-9-]+$/.test(id)) {
  console.error('id는 소문자·숫자·하이픈만 씁니다');
  process.exit(1);
}

const url = `https://raw.githubusercontent.com/Logic-Phantom/${repo}/HEAD/${path}`;
const res = await fetch(url);
if (!res.ok) {
  console.error(`아이콘을 받지 못했습니다: ${res.status} ${url}`);
  process.exit(1);
}
const input = Buffer.from(await res.arrayBuffer());

const { default: sharp } = await import('sharp');
const out = `public/apps/${id}.webp`;
await sharp(input).resize(160, 160, { fit: 'cover' }).webp({ quality: 86 }).toFile(out);
console.log(`saved ${out}`);
