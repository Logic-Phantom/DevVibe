/* eslint-disable @next/next/no-img-element */
import { allProjects, building, released, repoUrl } from '@/data/projects';
import type { Activity } from '@/lib/github';

const byRepo = new Map(allProjects.map((p) => [p.repo, p]));
const keywords = ['TypeScript', 'React Native', 'Next.js', 'Supabase', 'Spring', 'Unity'];
const enter = (i: number) => ({ 'data-enter': true, style: { '--i': i } as React.CSSProperties });

export default function Hero({ activity }: { activity: Activity[] }) {
  const tossCount = released.filter((p) => p.platform === '토스 미니앱').length;

  return (
    <section id="top" className="flex min-h-[100svh] items-center pb-16 pt-28">
      <div className="wrap grid w-full items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow" {...enter(0)}>
            Full-stack Developer · Seoul
          </p>

          <h1
            className="mt-5 text-[3rem] font-bold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-[5.25rem]"
            {...enter(1)}
          >
            풀스택 개발자
            <br />
            임채명입니다.
          </h1>

          <ul className="mt-8 flex flex-wrap gap-2" {...enter(2)}>
            {keywords.map((k) => (
              <li key={k} className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted">
                {k}
              </li>
            ))}
          </ul>

          <p className="mt-7 max-w-[30rem] text-base leading-relaxed text-muted md:text-lg" {...enter(3)}>
            아이디어를 직접 만들고, 테스트하고, 출시합니다.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4" {...enter(4)}>
            <a href="#work" className="btn-primary">
              작업 보기
            </a>
            <a href="#contact" className="btn-ghost">
              연락하기
            </a>
          </div>
        </div>

        {/* 출시한 앱 — 각 저장소의 실제 아이콘 */}
        <div className="card overflow-hidden" {...enter(5)}>
          <div className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-4">
            <p className="text-sm font-semibold">
              출시한 앱 <span className="ml-1 font-mono text-faint">{released.length}</span>
            </p>
            <p className="font-mono text-xs text-faint">
              토스 미니앱 {tossCount} · Google Play {released.length - tossCount}
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-px bg-line">
            {released.map((p) => (
              <li key={p.id} className="bg-surface">
                <a
                  href={`#app-${p.id}`}
                  className="group flex h-full flex-col items-center px-2 pb-4 pt-5 text-center transition-colors hover:bg-sunk"
                >
                  <img
                    src={`/apps/${p.id}.webp`}
                    alt=""
                    width={56}
                    height={56}
                    className="app-icon h-14 w-14 transition-transform duration-200 group-hover:-translate-y-0.5"
                  />
                  <span className="mt-3 text-sm font-medium leading-tight">{p.name}</span>
                  <span className="mt-0.5 text-[11px] text-faint">{p.platform}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-line px-5 py-3 font-mono text-xs text-faint">
            <span>개발 중 {building.length}개</span>
            {activity[0] && (
              <a
                href={repoUrl(activity[0].repo)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                최근 푸시 {activity[0].pushedAt.slice(5).replace('-', '.')} ·{' '}
                {byRepo.get(activity[0].repo)?.name ?? activity[0].repo} ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
