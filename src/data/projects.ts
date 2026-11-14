// 각 저장소 README(2026-11-13 기준)에서 옮긴 내용입니다.
// 상태 문구는 README에 적힌 검증 단계를 그대로 따릅니다. 새 소식이 생기면 여기만 고치면 됩니다.

export type ProjectStatus = 'released' | 'review' | 'building' | 'live' | 'archived';

export interface Project {
  repo: string; // GitHub 저장소 이름
  name: string; // 화면에 보이는 이름
  kind: string; // 한 줄 분류
  summary: string;
  facts: string[]; // README에서 확인한 사실만
  stack: string[];
  status: ProjectStatus;
  statusNote: string;
  link?: { href: string; label: string };
}

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  released: '출시됨',
  review: '심사 중',
  building: '개발 중',
  live: '운영 중',
  archived: '이전 작업',
};

export const GITHUB_USER = 'Logic-Phantom';
export const repoUrl = (repo: string) => `https://github.com/${GITHUB_USER}/${repo}`;

// 토스 앱 안에서 동작하는 미니앱(앱인토스)
export const shipped: Project[] = [
  {
    repo: 'SaEit',
    name: '사잇',
    kind: '토스 미니앱 · 약속 장소 추천',
    summary:
      '2~6명이 각자 출발역을 넣으면 가장 오래 걸리는 사람의 이동 시간이 가장 짧은 역을 추천하고, 각자 몇 분·몇 번 환승인지 나란히 보여 줍니다.',
    facts: ['수도권 21개 노선 · 역 581개', '서울교통공사·TAGO 시간표로 역간 시간 산출', '자동 테스트 47개'],
    stack: ['TypeScript', '앱인토스 SDK', '공공데이터'],
    status: 'released',
    statusNote: '2026-10-30 출시 · 토스 앱에서 “사잇” 검색',
  },
  {
    repo: 'lunchagree',
    name: '점심합의',
    kind: '토스 미니앱 · 점심 메뉴 투표',
    summary:
      '방장이 링크를 돌리면 동료들이 가입 없이 예산·못 먹는 것·걷기 한도를 넣고, 조건을 통과한 주변 식당을 후보로 좁혀 투표로 끝냅니다.',
    facts: [
      '전국 영업 중 음식점 648,519곳을 격자 타일 46,921개로 배포',
      '위치·거리 계산은 기기 안에서만',
      '공유 방은 Supabase',
    ],
    stack: ['TypeScript', '앱인토스 SDK', 'Supabase'],
    status: 'released',
    statusNote: '2026-11-02 출시',
  },
  {
    repo: 'WhereIsCar',
    name: '내 차 어딨지?',
    kind: '토스 미니앱 · 주차 기록',
    summary:
      '주차한 순간의 위치·층·구역·사진을 남기고, 경과 시간과 직접 입력한 요금표로 예상 주차요금을 계산합니다. 로그인·서버 없이 기기에만 저장합니다.',
    facts: ['요금표 저장·재사용', '기록 검색·통계', '단위 테스트(Vitest)'],
    stack: ['TypeScript', 'Vite', '앱인토스 SDK'],
    status: 'review',
    statusNote: '2026-11-08 검토 요청',
  },
];

// iOS·Android 앱과 게임
export const building: Project[] = [
  {
    repo: 'CutPick',
    name: '컷픽',
    kind: '모바일 앱 · 사진 추천',
    summary:
      '사용자가 고른 사진만 기기 안에서 분석해 인스타그램 캐러셀·스토리, 카카오톡 프로필용 후보를 추천합니다. 흐림·노출·비슷한 사진 묶기를 근거로 보여 줍니다.',
    facts: ['테스트 146개', 'Supabase RLS 테스트 13개', 'Android preview APK 확인'],
    stack: ['React Native', 'Expo', 'Supabase'],
    status: 'building',
    statusNote: 'Play 출시 준비',
  },
  {
    repo: 'WearLog',
    name: '웨어로그',
    kind: '모바일 앱 · 디지털 옷장',
    summary:
      '내 옷을 등록하고 기상청 날씨와 취향을 반영해 오늘의 코디를 추천합니다. 왜 그 옷을 골랐는지 이유를 함께 보여 줍니다.',
    facts: ['단위 테스트 105개', '카카오·Google 로그인', '기상청 단기예보 연동'],
    stack: ['React Native', 'Expo', 'Supabase'],
    status: 'building',
    statusNote: '실기기 확인 단계',
  },
  {
    repo: 'KeepOn',
    name: '킵온',
    kind: '모바일 앱 · 생활정보 인박스',
    summary:
      '다른 앱에서 공유한 링크·텍스트·문서에서 날짜·금액·쿠폰 코드를 후보로 찾아 주고, 사용자가 확인한 날짜로만 알림을 만듭니다.',
    facts: ['한국어 날짜·금액 규칙 추출', 'SQLite 로컬 저장', 'Android 공유 수신 확인'],
    stack: ['React Native', 'Expo Router', 'SQLite'],
    status: 'building',
    statusNote: '1.0.0 출시 준비',
    link: { href: 'https://logic-phantom.github.io/KeepOn/', label: '소개 페이지' },
  },
  {
    repo: 'OurShare',
    name: '우리몫',
    kind: '모바일 앱 · 집안일 분담',
    summary:
      '주간 집안일을 정하고 서로 정한 비율에 맞춰 담당자를 나눕니다. 기본은 기기 안에서 동작하고, 여러 휴대폰 공유는 선택입니다.',
    facts: ['배정 엔진·백업 복원 테스트', '서버 RLS 테스트 15개', 'Android 출시 빌드 완료'],
    stack: ['React Native', 'Expo', 'SQLite', 'Supabase'],
    status: 'building',
    statusNote: '실기기 검증 대기',
  },
  {
    repo: 'GudoPick',
    name: '구도픽',
    kind: '모바일 앱 · 구도 코치 카메라',
    summary:
      '온보딩에서 고른 사진 취향을 카메라 가이드로 바꿔, 촬영할 때 피사체의 위치·크기·여백·수평을 실시간으로 안내합니다.',
    facts: ['ML Kit 얼굴·객체 감지', '1:1 · 4:5 · 9:16 비율 프레임', '계정·서버·광고 SDK 없음'],
    stack: ['React Native', 'ML Kit'],
    status: 'building',
    statusNote: '릴리스 APK 빌드',
  },
  {
    repo: 'TOWERGLIDE',
    name: 'TOWERGLIDE',
    kind: '게임 · 3D 아케이드 비행',
    summary:
      '고층 빌딩 사이를 비행기로 누비는 모바일 게임입니다. 자유 비행, 링 코스, 기체 3종과 250m 청크 스트리밍 구조를 갖췄습니다.',
    facts: ['Core 로직 테스트 119개', 'GitHub Actions CI', '오프라인 · 광고 없음'],
    stack: ['Unity 6', 'URP', 'C#'],
    status: 'building',
    statusNote: 'Unity 첫 실행 전',
  },
];

export const earlier: Project[] = [
  {
    repo: 'TechLog',
    name: 'TechLog',
    kind: '기술 블로그',
    summary: 'Gatsby로 만든 개인 기술 블로그. RSS, 사이트맵, 공개 조회수, 관련 글 추천을 붙였습니다.',
    facts: [],
    stack: ['Gatsby', 'React', 'GitHub Pages'],
    status: 'live',
    statusNote: '운영 중',
    link: { href: 'https://logic-phantom.github.io/', label: 'logic-phantom.github.io' },
  },
  {
    repo: 'invitation',
    name: '모바일 청첩장',
    kind: '웹 앱',
    summary: '갤러리, 일정·날씨, 공유하기, 계좌 보기를 담은 모바일 청첩장.',
    facts: [],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'live',
    statusNote: '배포됨',
    link: { href: 'https://invitation-dusky-psi.vercel.app/', label: '사이트 보기' },
  },
  {
    repo: 'EmotiBurn',
    name: 'EmotiBurn',
    kind: '모바일 앱',
    summary: '적어 둔 감정을 불꽃 연출로 태워 보내는 Flutter 앱.',
    facts: [],
    stack: ['Flutter', 'Dart'],
    status: 'archived',
    statusNote: '2025',
  },
];

export const allProjects = [...shipped, ...building, ...earlier];

// GitHub API를 못 쓸 때 보여 줄 최근 푸시 목록 (2026-11-13 기준)
export const fallbackActivity = [
  { repo: 'TechLog', pushedAt: '2026-11-13' },
  { repo: 'CutPick', pushedAt: '2026-11-12' },
  { repo: 'GudoPick', pushedAt: '2026-11-12' },
  { repo: 'OurShare', pushedAt: '2026-11-11' },
  { repo: 'TOWERGLIDE', pushedAt: '2026-11-08' },
  { repo: 'WhereIsCar', pushedAt: '2026-11-08' },
  { repo: 'WearLog', pushedAt: '2026-11-07' },
];
