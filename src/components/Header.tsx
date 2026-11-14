'use client';

import { useEffect, useState } from 'react';

const nav = [
  { href: '#work', label: '작업' },
  { href: '#about', label: '일하는 방식' },
  { href: '#stack', label: '스택' },
  { href: '#contact', label: '연락' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open ? 'border-line bg-bg' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="text-[15px] font-semibold tracking-[-0.02em]">임채명</span>
          <span className="font-mono text-xs text-faint">Forest_LIM</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link text-sm text-muted">
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/Logic-Phantom"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-ink"
          >
            GitHub ↗
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-200 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-200 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 bg-bg md:hidden">
          <nav className="wrap flex flex-col pt-6" aria-label="모바일 메뉴">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-5 text-2xl font-medium tracking-[-0.02em]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/Logic-Phantom"
              target="_blank"
              rel="noopener noreferrer"
              className="py-5 font-mono text-sm text-muted"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
