/* eslint-disable @next/next/no-img-element */
import { building, earlier, released, repoUrl, STATUS_LABEL, type Project } from '@/data/projects';

const dot: Record<Project['status'], string> = {
  released: 'bg-ok',
  live: 'bg-ok',
  building: 'bg-wait',
  archived: 'bg-faint',
};

function Icon({ p, size = 'h-14 w-14' }: { p: Project; size?: string }) {
  if (!p.icon) {
    return (
      <span className={`app-icon ${size} flex items-center justify-center bg-sunk font-mono text-sm text-muted`}>
        {p.name.slice(0, 1)}
      </span>
    );
  }
  return <img src={`/apps/${p.id}.webp`} alt="" width={56} height={56} loading="lazy" className={`app-icon ${size}`} />;
}

function Status({ p }: { p: Project }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${dot[p.status]}`} aria-hidden />
      {p.statusNote || STATUS_LABEL[p.status]}
    </span>
  );
}

function Links({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
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
        <div className="grid gap-6 md:grid-cols-[1fr_1.3fr] md:items-end">
          <h2 className="h2">작업</h2>
          <p className="max-w-xl text-muted md:justify-self-end">
            2026년 가을에 토스 미니앱 다섯 개와 Android 앱 하나를 출시했고, 모바일 앱 네 개와 게임 하나를 만들고
            있습니다. 설명과 숫자는 각 저장소 README를 따릅니다.
          </p>
        </div>

        {/* 출시 */}
        <div className="mt-16 flex items-baseline justify-between">
          <h3 className="eyebrow">출시 · {released.length}</h3>
        </div>
        <ul className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {released.map((p) => (
            <li key={p.id} id={`app-${p.id}`} className="scroll-mt-24">
              <article className="card flex h-full flex-col p-6">
                <div className="flex items-start gap-4">
                  <Icon p={p} />
                  <div className="min-w-0 pt-1">
                    <h4 className="text-xl font-semibold tracking-[-0.025em]">{p.name}</h4>
                    <p className="mt-0.5 text-sm text-faint">{p.kind}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-ink px-2.5 py-0.5 text-[11px] font-medium text-bg">{p.platform}</span>
                  <Status p={p} />
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.summary}</p>
                <ul className="mb-6 mt-4 space-y-1 text-[13px] text-muted">
                  {p.facts.map((f) => (
                    <li key={f} className="before:mr-2 before:text-faint before:content-['—']">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-line pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                  <Links p={p} />
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* 개발 중 */}
        <h3 className="eyebrow mt-20">개발 중 · {building.length}</h3>
        <ul className="mt-5 border-t border-line">
          {building.map((p) => (
            <li key={p.id}>
              <a
                href={repoUrl(p.repo)}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-b border-line py-5 transition-colors hover:bg-surface md:grid-cols-[auto_14rem_1fr_auto] md:items-center md:gap-x-8 md:px-3"
              >
                <Icon p={p} size="h-11 w-11" />
                <div className="min-w-0">
                  <p className="font-semibold group-hover:text-accent">{p.name}</p>
                  <p className="text-xs text-faint">
                    {p.kind} · {p.platform}
                  </p>
                </div>
                <p className="col-span-2 text-sm leading-relaxed text-muted md:col-span-1">{p.summary}</p>
                <div className="col-span-2 md:col-span-1 md:text-right">
                  <Status p={p} />
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* 이전 작업 */}
        <div className="mt-20">
          <div>
            <h3 className="eyebrow">이전 작업</h3>
            <ul className="mt-5 border-t border-line">
              {earlier.map((p) => (
                <li key={p.id} className="flex flex-col gap-2 border-b border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <div>
                    <p className="font-semibold">
                      {p.name} <span className="ml-1 text-sm font-normal text-faint">{p.kind}</span>
                    </p>
                    <p className="mt-1 text-sm text-muted">{p.summary}</p>
                  </div>
                  <div className="shrink-0">
                    <Links p={p} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

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
