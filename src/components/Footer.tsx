export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-3 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} 임채명 · Forest_LIM</p>
        <p className="font-mono text-xs">Next.js · Vercel · 프로젝트 정보는 GitHub README 기준</p>
        <a href="#top" className="link self-start text-muted sm:self-auto">
          맨 위로 ↑
        </a>
      </div>
    </footer>
  );
}
