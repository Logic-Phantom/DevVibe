# Forest_LIM Portfolio

현대적이고 세련된 개인 포트폴리오 웹사이트입니다. Next.js와 Tailwind CSS를 사용하여 구축되었으며, PWA 기능을 지원하여 모바일에서도 앱처럼 사용할 수 있습니다. GitHub API를 통해 실제 프로젝트 정보를 동적으로 표시합니다.

## ✨ 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **PWA 지원**: Progressive Web App으로 설치 가능하고 오프라인 지원
- **GitHub 연동**: 실제 GitHub 저장소 정보를 자동으로 가져와서 표시
- **현대적 UI/UX**: Framer Motion을 활용한 부드러운 애니메이션
- **SEO 최적화**: Next.js의 SSR/SSG 기능으로 검색 엔진 최적화
- **접근성**: 웹 접근성 표준을 준수하는 UI 구성

## 🚀 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **PWA**: Service Worker, Web App Manifest
- **Deployment**: Vercel (권장)

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 루트 레이아웃 (PWA 메타데이터 포함)
│   │   ├── page.tsx            # 메인 페이지
│   │   └── globals.css         # 전역 스타일
│   └── components/
│       ├── Header.tsx          # 네비게이션 헤더
│       ├── Hero.tsx            # 메인 히어로 섹션
│       ├── About.tsx           # 자기소개 섹션
│       ├── Skills.tsx          # 기술 스택 섹션
│       ├── Projects.tsx        # 프로젝트 섹션 (GitHub 연동)
│       ├── Contact.tsx         # 연락처 섹션
│       ├── Footer.tsx          # 푸터
│       └── PWAInstallPrompt.tsx # PWA 설치 프롬프트
├── public/
│   ├── manifest.json           # PWA 매니페스트
│   ├── sw.js                  # 서비스 워커
│   ├── icon-192x192.png       # PWA 아이콘 (192x192)
│   ├── icon-512x512.png       # PWA 아이콘 (512x512)
│   └── apple-touch-icon.png   # Apple 터치 아이콘
├── package.json
└── README.md
```

## 🛠️ 설치 및 실행

### 1. 저장소 클론
```bash
git clone <your-repository-url>
cd portfolio
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📱 PWA 기능

### 설치 방법
1. **Chrome/Edge**: 주소창 옆의 설치 아이콘 클릭
2. **Safari**: 공유 버튼 → "홈 화면에 추가"
3. **Android**: 브라우저 메뉴 → "홈 화면에 추가"

### PWA 특징
- **오프라인 지원**: 서비스 워커를 통한 캐싱
- **앱처럼 사용**: 독립 실행 모드
- **홈 화면 추가**: 모바일에서 빠른 접근
- **푸시 알림**: 향후 구현 예정

## ⚙️ 설정 및 커스터마이징

### GitHub 사용자명 변경
`src/components/Projects.tsx` 파일에서 GitHub 사용자명을 변경하세요:

```typescript
// 29번째 줄 근처
const username = 'yourusername'; // 실제 GitHub 사용자명으로 변경
```

### 연락처 정보 수정
`src/components/Contact.tsx`와 `src/components/Hero.tsx`에서 연락처 정보를 수정하세요:

```typescript
// 이메일, 전화번호, 소셜 미디어 링크 등
```

### 프로필 정보 수정
각 컴포넌트에서 개인 정보를 수정하세요:

- **Hero.tsx**: 이름, 직함, 소개글
- **About.tsx**: 경력, 자기소개
- **Skills.tsx**: 기술 스택, 숙련도

### 색상 테마 변경
`src/app/globals.css`에서 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다:

```css
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
}
```

## 🚀 Vercel 배포

### 1. Vercel 계정 생성
[vercel.com](https://vercel.com)에서 계정을 생성하세요.

### 2. GitHub 연동
- Vercel에서 "New Project" 클릭
- GitHub 저장소 선택
- 자동 배포 설정 확인

### 3. 환경 변수 설정 (필요시)
GitHub API 제한이 있는 경우 환경 변수를 설정할 수 있습니다:

```bash
GITHUB_TOKEN=your_github_token
```

### 4. 배포
GitHub에 push하면 자동으로 배포됩니다:

```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

## 📱 반응형 디자인

이 포트폴리오는 다음 브레이크포인트를 지원합니다:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 커스텀 컴포넌트

### 애니메이션
Framer Motion을 사용하여 스크롤 기반 애니메이션을 구현했습니다:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* 컨텐츠 */}
</motion.div>
```

### 그라디언트 텍스트
CSS 클래스를 사용하여 그라디언트 텍스트 효과를 적용했습니다:

```typescript
<span className="gradient-text">텍스트</span>
```

### PWA 설치 프롬프트
사용자가 PWA를 설치할 수 있도록 도와주는 컴포넌트입니다:

```typescript
<PWAInstallPrompt />
```

## 🔧 문제 해결

### GitHub API 제한
GitHub API는 시간당 60회 요청으로 제한됩니다. 이를 해결하려면:

1. GitHub Personal Access Token 생성
2. 환경 변수로 설정
3. API 요청 헤더에 토큰 추가

### PWA 관련 문제
PWA가 제대로 작동하지 않는 경우:

1. HTTPS 환경에서 테스트 (로컬 개발 시 localhost는 허용)
2. 브라우저 개발자 도구 → Application 탭에서 서비스 워커 확인
3. 매니페스트 파일이 올바르게 로드되는지 확인

### 빌드 오류
TypeScript 오류가 발생하는 경우:

```bash
npm run build
npm run lint
```

### 스타일 문제
Tailwind CSS가 제대로 작동하지 않는 경우:

```bash
npm run build:css
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여

버그 리포트나 기능 제안은 이슈를 통해 제출해 주세요.

## 📞 연락처

프로젝트에 대한 질문이나 제안사항이 있으시면 언제든 연락해 주세요.

---

**Happy Coding! 🚀**
