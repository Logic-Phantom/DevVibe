import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans_KR, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const sans = IBM_Plex_Sans_KR({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const title = '임채명 — 풀스택 개발자';
const description =
  '토스 미니앱과 로컬 우선 모바일 앱을 만드는 개발자 임채명(Forest_LIM)의 포트폴리오. 사잇·점심합의 출시, 내 차 어딨지? 심사 중.';

export const metadata: Metadata = {
  title,
  description,
  manifest: '/manifest.json',
  openGraph: { title, description, type: 'website', locale: 'ko_KR' },
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: '임채명' },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: '/icon-192x192.svg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/icon-512x512.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0d10',
  colorScheme: 'dark',
};

const swScript = `
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (reg) {
      if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      reg.addEventListener('updatefound', function () {
        var w = reg.installing;
        if (!w) return;
        w.addEventListener('statechange', function () {
          if (w.state === 'installed' && navigator.serviceWorker.controller) {
            w.postMessage({ type: 'SKIP_WAITING' });
            window.location.reload();
          }
        });
      });
    }).catch(function () {});
  });
}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: swScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
