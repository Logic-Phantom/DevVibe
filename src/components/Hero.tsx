import { allProjects, repoUrl } from '@/data/projects';
import type { Activity } from '@/lib/github';

const nameOf = new Map(allProjects.map((p) => [p.repo, p]));

export default function Hero({ activity }: { activity: Activity[] }) {
  return (
    <section id="top" className="flex min-h-[100svh] items-center pb-16 pt-28 md:pt-24">
      <div className="wrap grid w-full items-end gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow" data-enter style={{ '--i': 0 } as React.CSSProperties}>
            서울 · 풀스택 개발자
          </p>

          <h1
            className="mt-6 text-[2.35rem] font-medium leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-[4rem]"
            data-enter
            style={{ '--i': 1 } as React.CSSProperties}
          >
            토스 미니앱과
            <br />
            로컬 우선 모바일 앱을
            <br />
            만드는 임채명입니다.
          </h1>

          <p
            className="mt-7 max-w-[34rem] text-base leading-relaxed text-muted md:text-lg"
            data-enter
            style={{ '--i': 2 } as React.CSSProperties}
          >
            React Native·Expo, TypeScript, Supabase로 기획부터 스토어 심사까지 혼자 진행합니다. 무엇을
            검증했고 무엇이 남았는지는 저장소 README에 그대로 적어 둡니다.
          </p>

          <dl
            className="mt-10 grid max-w-[34rem] grid-cols-3 border-y border-line"
            data-enter
            style={{ '--i': 3 } as React.CSSProperties}
          >
            {[
              { k: '출시', v: '2', note: '사잇 · 점심합의' },
              { k: '심사 중', v: '1', note: '내 차 어딨지?' },
              { k: '개발 중', v: '6', note: 'iOS · Android' },
            ].map((s, i) => (
              <div key={s.k} className={`py-4 ${i > 0 ? 'border-l border-line pl-4' : ''}`}>
                <dt className="eyebrow">{s.k}</dt>
                <dd className="mt-1 text-3xl font-medium tracking-[-0.03em]">{s.v}</dd>
                <dd className="mt-1 truncate text-xs text-faint">{s.note}</dd>
              </div>
            ))}
          </dl>

          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
            data-enter
            style={{ '--i': 4 } as React.CSSProperties}
          >
            <a href="#work" className="btn-primary">
              작업 보기
            </a>
            <a href="mailto:dlacoaud92@naver.com" className="btn-ghost sm:border-0 sm:px-0">
              <span className="link">dlacoaud92@naver.com</span>
            </a>
          </div>
        </div>

        {/* 실제 GitHub 푸시 기록 (한 시간마다 갱신) */}
        <div
          className="card overflow-hidden font-mono text-[13px]"
          data-enter
          style={{ '--i': 5 } as React.CSSProperties}
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3 text-xs text-faint">
            <span>최근 푸시</span>
            <span>github.com/Logic-Phantom</span>
          </div>
          <ol>
            {activity.map((a) => {
              const p = nameOf.get(a.repo);
              return (
                <li key={a.repo} className="border-b border-line last:border-0">
                  <a
                    href={repoUrl(a.repo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[5.5rem_1fr] gap-3 px-4 py-3 transition-colors hover:bg-[#161a20]"
                  >
                    <time className="text-faint" dateTime={a.pushedAt}>
                      {a.pushedAt.slice(5).replace('-', '.')}
                    </time>
                    <span className="min-w-0">
                      <span className="text-ink group-hover:text-accent">{a.repo}</span>
                      {p && <span className="block truncate font-sans text-xs text-muted">{p.kind}</span>}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
