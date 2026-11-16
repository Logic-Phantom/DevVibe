# DevVibe — 임채명(Forest_LIM) 포트폴리오

풀스택 개발자 임채명의 포트폴리오입니다. 토스 미니앱 5개와 Google Play 앱 1개를 출시했습니다.

- 배포: https://dev-vibe.vercel.app
- 스택: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3
- 폰트: IBM Plex Sans KR + IBM Plex Mono (`next/font/google`)

## 동작 방식

- 페이지는 빌드할 때 정적으로 만들어집니다. 내용은 모두 `src/data/projects.ts`에서 옵니다.
- 매일 한 번 클라우드 에이전트(Claude Code 루틴)가 GitHub 저장소 README를 읽고 `projects.ts`를 갱신해 `master`에 푸시하면 Vercel이 다시 배포합니다. 규칙은 [docs/AUTO_UPDATE.md](docs/AUTO_UPDATE.md).
- 프로젝트 소개 문구는 각 저장소 README에서 옮겨 `src/data/projects.ts`에 둡니다. 앱 아이콘은 각 저장소의 아이콘을 160px WebP로 줄여 `public/apps/<id>.webp`에 둡니다.
- 기본은 밝은 화면이고, 헤더 버튼으로 어두운 화면을 고를 수 있습니다(`localStorage.theme`, `<html data-theme="dark">`).
- 연락 폼은 `/api/contact`(nodemailer)로 메일을 보냅니다. `NAVER_APP_PASSWORD`(필요하면 `NAVER_USER`) 환경 변수가 필요합니다.
- `public/sw.js` 서비스 워커와 `public/manifest.json`으로 홈 화면에 추가할 수 있습니다. 페이지는 네트워크 우선이라 내용 갱신에는 캐시 버전을 올릴 필요가 없고, `sw.js` 자체를 바꿀 때만 `CACHE_NAME`을 올립니다.

## 구조

```
src/
├── app/
│   ├── layout.tsx          # 폰트, 메타데이터, 서비스 워커 등록
│   ├── page.tsx            # 섹션 조립
│   ├── globals.css         # 색 토큰(:root), 공통 클래스, 첫 화면 진입 애니메이션
│   └── api/contact/route.ts
├── components/
│   ├── Header.tsx          # 고정 헤더, 모바일 전체 화면 메뉴 (client)
│   ├── Hero.tsx            # 첫 화면: 소개, 기술 키워드, 출시한 앱 아이콘
│   ├── Projects.tsx        # 출시·심사 / 개발 중 / 이전 작업
│   ├── About.tsx           # 일하는 방식
│   ├── Skills.tsx          # 스택과 실제 쓰는 저장소
│   ├── Contact.tsx         # 연락처 + 메일 폼 (client)
│   └── Footer.tsx
└── data/projects.ts        # 프로젝트 내용 — 내용을 바꿀 때는 여기만 고치면 됩니다
scripts/list-repos.mjs      # 저장소 목록 (API 없이 github.com 공개 페이지)
scripts/fetch-icon.mjs      # 저장소 아이콘 → public/apps/<id>.webp
docs/AUTO_UPDATE.md         # 매일 자동 갱신 규칙
```

## 디자인 원칙

[taste-skill](https://github.com/Leonxlnx/taste-skill)의 규칙을 참고했습니다.

- 색은 `globals.css`의 `:root`·`[data-theme=dark]` 토큰에서만 정합니다. 강조색(파랑)은 주 버튼과 링크에만 씁니다. 보라색·그라디언트 텍스트·글로우는 쓰지 않습니다.
- 첫 화면만 한 번 들어오고(`data-enter`), 스크롤에 따라 움직이는 효과는 없습니다. 링크가 있는 카드만 2px 들립니다. `prefers-reduced-motion`이면 모든 움직임을 끕니다.
- 숙련도 퍼센트, 꾸며 낸 숫자는 넣지 않습니다. 화면의 숫자는 모두 저장소 README에서 확인한 값입니다.
- 키보드 포커스는 모든 요소에서 강조색 테두리(`:focus-visible`)로 보입니다. 입력칸도 테두리를 지우지 않습니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## 작업 내역

### 2026-11-16 — 디자인 점검(Impeccable·Hallmark 기준)

두 오픈소스 디자인 스킬([pbakaus/impeccable](https://github.com/pbakaus/impeccable), [Nutlope/hallmark](https://github.com/Nutlope/hallmark))의 공개 규칙으로 운영 사이트(375·1024px, 라이트·다크)와 코드를 점검했습니다. 스킬 설치·외부 코드 실행은 없었습니다. 이미 위 디자인 원칙을 잘 지키고 있어 어긋난 두 곳만 고쳤고, 화면 구성·컴포넌트·자동 갱신 규칙은 그대로입니다.

- 연락 폼 오류 상자가 색 토큰 밖의 Tailwind 빨강(`red-500`·`red-700`·`dark:red-300`)을 쓰던 것을 `--danger`·`--danger-soft`·`--danger-line` 토큰(라이트·다크 각각)으로 옮김. 글자 대비: 라이트 5.65:1, 다크 8.39:1
  - 참고: 색을 CSS 변수로 두면 Tailwind 3의 투명도 표기(`border-danger/40`)가 만들어지지 않아 테두리 전용 토큰을 따로 둠
- 입력칸(`.field`)의 `focus:outline-none`을 지워 다른 요소와 같은 포커스 테두리가 보이게 함(테두리 색 변화는 유지)
- 그대로 둔 것: 영문 대문자 라벨(`GITHUB`·`LINKEDIN`)과 첫 화면 영문 머리말은 Hallmark 규칙과 다르지만 의도한 디자인이라 유지. 앱 아이콘 흰 바탕도 유지
- 검증: `npm ci`, `npx tsc --noEmit`, `npm run lint`, `npm run build` 통과(자동 갱신과 같은 검사). 빌드 CSS에 새 클래스 생성 확인, 로컬 `next start`에서 375px 라이트·다크 오류 상자 색과 입력칸 포커스 테두리 확인. 실제 메일 전송은 하지 않음(오류 상자는 화면에 임시로 넣어 확인)
