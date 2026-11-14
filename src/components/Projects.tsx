import { building, earlier, repoUrl, shipped, STATUS_LABEL, type Project } from '@/data/projects';

const statusColor: Record<Project['status'], string> = {
  released: 'bg-ok',
  live: 'bg-ok',
  review: 'bg-wait',
  building: 'bg-muted',
  archived: 'bg-faint',
};

function Status({ p }: { p: Project }) {
  return (
    <span className="flex flex-col gap-1 text-xs">
      <span className="inline-flex items-center gap-2 font-mono text-muted">
        <span className={`h-1.5 w-1.5 rounded-full ${statusColor[p.status]}`} aria-hidden />
        {STATUS_LABEL[p.status]}
      </span>
      <span className="pl-3.5 text-faint">{p.statusNote}</span>
    </span>
  );
}

function Links({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
      <a href={repoUrl(p.repo)} target="_blank" rel="noopener noreferrer" className="link text-muted">
        GitHub ↗
      </a>
      {p.link && (
        <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="link text-muted">
          {p.link.label} ↗
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end">
          <h2 className="h2">작업</h2>
          <p className="max-w-xl text-muted md:justify-self-end">
            2026년 가을에는 토스 앱 안에서 도는 미니앱 세 개와 iOS·Android 앱 다섯 개, 모바일 게임 하나를
            만들었습니다. 상태는 각 저장소 README의 검증 표를 따릅니다.
          </p>
        </div>

        {/* 출시·심사 */}
        <div className="mt-16">
          <h3 className="eyebrow">토스 미니앱 · 출시와 심사</h3>
          <ul className="mt-5 border-t border-line">
            {shipped.map((p) => (
              <li
                key={p.repo}
                className="grid gap-5 border-b border-line py-9 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-12"
              >
                <div>
                  <p className="text-2xl font-medium tracking-[-0.03em] md:text-[1.75rem]">{p.name}</p>
                  <p className="mt-1 text-sm text-faint">{p.kind}</p>
                  <div className="mt-4">
                    <Status p={p} />
                  </div>
                </div>
                <div>
                  <p className="max-w-2xl leading-relaxed text-ink/90">{p.summary}</p>
                  <ul className="mt-5 grid gap-x-8 gap-y-2 text-sm text-muted sm:grid-cols-2 lg:grid-cols-3">
                    {p.facts.map((f) => (
                      <li key={f} className="border-l border-line-strong pl-3">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="tag">
                          {s}
                        </span>
                      ))}
                    </div>
                    <Links p={p} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 개발 중 */}
        <div className="mt-20">
          <h3 className="eyebrow">iOS · Android · 게임 · 개발 중</h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {building.map((p) => (
              <li key={p.repo}>
                <a
                  href={repoUrl(p.repo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-link group flex h-full flex-col p-6"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-xl font-medium tracking-[-0.025em]">{p.name}</p>
                    <span className="font-mono text-xs text-faint group-hover:text-accent">↗</span>
                  </div>
                  <p className="mt-1 text-sm text-faint">{p.kind}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <ul className="mt-4 space-y-1 text-[13px] text-muted">
                    {p.facts.map((f) => (
                      <li key={f} className="before:mr-2 before:text-faint before:content-['—']">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="tag">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-line pt-4">
                      <Status p={p} />
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 이전 작업 */}
        <div className="mt-20">
          <h3 className="eyebrow">이전 작업</h3>
          <ul className="mt-5 border-t border-line">
            {earlier.map((p) => (
              <li
                key={p.repo}
                className="grid gap-2 border-b border-line py-5 lg:grid-cols-[15rem_1fr_auto] lg:items-baseline lg:gap-12"
              >
                <p className="font-medium">
                  {p.name} <span className="ml-1 text-sm font-normal text-faint">{p.kind}</span>
                </p>
                <p className="text-sm text-muted">
                  {p.summary} <span className="font-mono text-xs text-faint">{p.stack.join(' · ')}</span>
                </p>
                <Links p={p} />
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/Logic-Phantom?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-10 w-full sm:w-auto"
          >
            전체 저장소 보기 ↗
          </a>
        </div>
      </div>
    </section>
  );
}
