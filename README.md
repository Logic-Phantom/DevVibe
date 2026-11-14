# DevVibe — 임채명(Forest_LIM) 포트폴리오

토스 미니앱과 로컬 우선 모바일 앱을 만드는 풀스택 개발자 임채명의 포트폴리오입니다.

- 배포: https://dev-vibe.vercel.app
- 스택: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3
- 폰트: IBM Plex Sans KR + IBM Plex Mono (`next/font/google`)

## 동작 방식

- `src/app/page.tsx`는 서버 컴포넌트입니다. 빌드할 때 GitHub API에서 최근 푸시한 저장소 목록을 받아 히어로의 “최근 푸시” 목록을 만들고, `revalidate = 3600`으로 한 시간마다 다시 생성합니다(ISR).
- GitHub API 호출이 실패하거나 제한에 걸리면 `src/data/projects.ts`의 `fallbackActivity`를 씁니다. 요청 한도를 늘리려면 Vercel 환경 변수에 `GITHUB_TOKEN`을 넣으세요.
- 프로젝트 소개 문구는 각 저장소 README에서 옮겨 `src/data/projects.ts`에 둡니다. 상태(출시됨·심사 중·개발 중)도 README의 검증 표를 따릅니다.
- 연락 폼은 `/api/contact`(nodemailer)로 메일을 보냅니다. `NAVER_APP_PASSWORD`(필요하면 `NAVER_USER`) 환경 변수가 필요합니다.
- `public/sw.js` 서비스 워커와 `public/manifest.json`으로 홈 화면에 추가할 수 있습니다. 디자인을 크게 바꾸면 `CACHE_NAME` 버전을 올려 주세요.

## 구조

```
src/
├── app/
│   ├── layout.tsx          # 폰트, 메타데이터, 서비스 워커 등록
│   ├── page.tsx            # 섹션 조립 + GitHub 활동 불러오기 (ISR 1시간)
│   ├── globals.css         # 색 토큰(:root), 공통 클래스, 첫 화면 진입 애니메이션
│   └── api/contact/route.ts
├── components/
│   ├── Header.tsx          # 고정 헤더, 모바일 전체 화면 메뉴 (client)
│   ├── Hero.tsx            # 첫 화면: 소개, 숫자 요약, 최근 푸시 목록
│   ├── Projects.tsx        # 출시·심사 / 개발 중 / 이전 작업
│   ├── About.tsx           # 일하는 방식
│   ├── Skills.tsx          # 스택과 실제 쓰는 저장소
│   ├── Contact.tsx         # 연락처 + 메일 폼 (client)
│   └── Footer.tsx
├── data/projects.ts        # 프로젝트 내용 — 내용을 바꿀 때는 여기만 고치면 됩니다
└── lib/github.ts           # GitHub 최근 푸시 조회
```

## 디자인 원칙

[taste-skill](https://github.com/Leonxlnx/taste-skill)의 규칙을 참고했습니다.

- 색은 `globals.css`의 `:root` 토큰에서만 정합니다. 강조색(하늘색)은 주 버튼과 링크에만 씁니다. 보라색·그라디언트 텍스트·글로우는 쓰지 않습니다.
- 첫 화면만 한 번 들어오고(`data-enter`), 스크롤에 따라 움직이는 효과는 없습니다. 링크가 있는 카드만 2px 들립니다. `prefers-reduced-motion`이면 모든 움직임을 끕니다.
- 숙련도 퍼센트, 꾸며 낸 숫자는 넣지 않습니다. 화면의 숫자는 모두 저장소 README에서 확인한 값입니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
