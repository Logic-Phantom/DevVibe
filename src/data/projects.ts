// 각 저장소 README(2026-11-16 기준)와 본인 확인을 바탕으로 정리한 내용입니다.
// 새 소식이 생기면 이 파일만 고치면 됩니다. 아이콘은 public/apps/<id>.webp (160px).

export type ProjectStatus = 'released' | 'building' | 'live' | 'archived';
export type Platform = '토스 미니앱' | 'Google Play' | 'iOS · Android' | '웹' | '게임';

export interface Project {
  id: string; // 아이콘 파일 이름
  repo: string; // GitHub 저장소 이름
  name: string;
  kind: string;
  platform: Platform;
  summary: string;
  facts: string[];
  stack: string[];
  status: ProjectStatus;
  statusNote: string;
  icon?: boolean;
  link?: { href: string; label: string };
}

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  released: '출시',
  building: '개발 중',
  live: '운영 중',
  archived: '이전 작업',
};

export const GITHUB_USER = 'Logic-Phantom';
export const repoUrl = (repo: string) => `https://github.com/${GITHUB_USER}/${repo}`;

export const released: Project[] = [
  {
    id: 'saeit',
    repo: 'SaEit',
    name: '사잇',
    kind: '약속 장소 추천',
    platform: '토스 미니앱',
    summary:
      '2~6명이 각자 출발역을 넣으면 가장 오래 걸리는 사람의 이동 시간이 가장 짧은 역을 추천하고, 각자 몇 분·몇 번 환승인지 나란히 보여 줍니다.',
    facts: ['수도권 21개 노선 · 역 581개', '공식 시간표로 역간 시간 산출', '자동 테스트 47개'],
    stack: ['TypeScript', '앱인토스 SDK', '공공데이터'],
    status: 'released',
    statusNote: '2026-10-30 출시',
    icon: true,
  },
  {
    id: 'lunchagree',
    repo: 'lunchagree',
    name: '점심합의',
    kind: '점심 메뉴 투표',
    platform: '토스 미니앱',
    summary:
      '방장이 링크를 돌리면 동료들이 가입 없이 예산·못 먹는 것·걷기 한도를 넣고, 조건을 통과한 주변 식당을 후보로 좁혀 투표로 끝냅니다.',
    facts: ['전국 음식점 648,519곳 타일 배포', '위치 계산은 기기 안에서만', '공유 방은 Supabase'],
    stack: ['TypeScript', '앱인토스 SDK', 'Supabase'],
    status: 'released',
    statusNote: '2026-11-02 출시',
    icon: true,
  },
  {
    id: 'whereiscar',
    repo: 'WhereIsCar',
    name: '내 차 어딨지?',
    kind: '주차 위치 · 요금 기록',
    platform: '토스 미니앱',
    summary:
      '주차한 순간의 위치·층·구역·사진을 남기고, 경과 시간과 직접 입력한 요금표로 예상 주차요금을 계산합니다. 로그인·서버 없이 기기에만 저장합니다.',
    facts: ['요금표 저장·재사용', '기록 검색·통계', 'Vitest 단위 테스트'],
    stack: ['TypeScript', 'Vite', '앱인토스 SDK'],
    status: 'released',
    statusNote: '2026-11 출시',
    icon: true,
  },
  {
    id: 'gyushot',
    repo: 'gyushot',
    name: '제출맞춤',
    kind: '증명·제출용 사진 규격 맞춤',
    platform: '토스 미니앱',
    summary:
      '여권·운전면허·증명사진 같은 용도를 고르고 사진 한 장을 불러오면, 그 규격의 픽셀·비율·용량·형식에 맞는 파일을 기기 안에서 만들고 다시 읽어 검사합니다.',
    facts: ['규격 프리셋 8개 검증', '테스트 66개', '사진은 서버로 보내지 않음'],
    stack: ['TypeScript', '앱인토스 SDK 3.10'],
    status: 'released',
    statusNote: '2026-11 출시',
    icon: true,
  },
  {
    id: 'sizenote',
    repo: 'SizeNote',
    name: '사이즈 어때?',
    kind: '가구·가전 치수 비교',
    platform: '토스 미니앱',
    summary:
      '우리 집 공간 치수를 저장해 두고, 사려는 가구·가전이 설치 자리와 반입 경로에 맞는지 비교합니다. 사진 위에 기준 길이를 그어 치수를 재는 보조 측정도 있습니다.',
    facts: ['반입 경로 본체·포장 판정', '사진 보조 측정', '테스트 42개'],
    stack: ['React 19', 'Vite', '앱인토스 SDK'],
    status: 'released',
    statusNote: '2026-11 출시',
    icon: true,
  },
  {
    id: 'keepon',
    repo: 'KeepOn',
    name: '킵온',
    kind: '생활정보 인박스',
    platform: 'Google Play',
    summary:
      '다른 앱에서 공유한 링크·텍스트·문서에서 날짜·금액·쿠폰 코드를 후보로 찾아 주고, 사용자가 확인한 날짜로만 알림을 만듭니다.',
    facts: ['한국어 날짜·금액 규칙 추출', 'SQLite 로컬 저장', '로그인·서버 없음'],
    stack: ['React Native', 'Expo Router', 'SQLite'],
    status: 'released',
    statusNote: 'Google Play 출시',
    icon: true,
    link: { href: 'https://logic-phantom.github.io/KeepOn/', label: '소개 페이지' },
  },
];

export const building: Project[] = [
  {
    id: 'ourshare',
    repo: 'OurShare',
    name: '우리몫',
    kind: '집안일 분담',
    platform: 'iOS · Android',
    summary: '주간 집안일을 정하고 서로 정한 비율에 맞춰 담당자를 나눕니다. 여러 휴대폰 공유는 선택입니다.',
    facts: ['Play 비공개 테스트 트랙 업로드', '서버 RLS 테스트 15개'],
    stack: ['React Native', 'Expo', 'SQLite', 'Supabase'],
    status: 'building',
    statusNote: 'Play 비공개 테스트 준비',
    icon: true,
  },
  {
    id: 'cutpick',
    repo: 'CutPick',
    name: '컷픽',
    kind: '사진 추천',
    platform: 'iOS · Android',
    summary: '고른 사진만 기기 안에서 분석해 인스타그램 캐러셀·스토리, 카카오톡 프로필용 후보를 근거와 함께 추천합니다.',
    facts: ['테스트 146개', 'Supabase RLS 테스트 13개'],
    stack: ['React Native', 'Expo', 'Supabase'],
    status: 'building',
    statusNote: '지인 대상 테스트',
    icon: true,
  },
  {
    id: 'wearlog',
    repo: 'WearLog',
    name: '웨어로그',
    kind: '디지털 옷장',
    platform: 'iOS · Android',
    summary: '내 옷을 등록하고 기상청 날씨와 취향을 반영해 오늘의 코디를 추천합니다. 왜 그 옷을 골랐는지 함께 보여 줍니다.',
    facts: ['단위 테스트 105개', '카카오·Google 로그인'],
    stack: ['React Native', 'Expo', 'Supabase'],
    status: 'building',
    statusNote: '실기기 확인 단계',
    icon: true,
  },
  {
    id: 'gudopick',
    repo: 'GudoPick',
    name: '구도픽',
    kind: '구도 코치 카메라',
    platform: 'iOS · Android',
    summary: '고른 사진 취향을 카메라 가이드로 바꿔, 촬영할 때 피사체의 위치·크기·여백·수평을 실시간으로 안내합니다.',
    facts: ['ML Kit 얼굴·객체 감지', '계정·서버·광고 SDK 없음'],
    stack: ['React Native', 'ML Kit'],
    status: 'building',
    statusNote: '릴리스 APK 빌드',
    icon: true,
  },
  {
    id: 'towerglide',
    repo: 'TOWERGLIDE',
    name: 'TOWERGLIDE',
    kind: '3D 아케이드 비행',
    platform: '게임',
    summary: '고층 빌딩 사이를 비행기로 누비는 모바일 게임. 자유 비행, 링 코스, 기체 3종과 250m 청크 스트리밍 구조.',
    facts: ['Core 로직 테스트 119개', 'GitHub Actions CI'],
    stack: ['Unity 6', 'URP', 'C#'],
    status: 'building',
    statusNote: '에디터 테스트 전',
    icon: true,
  },
  {
    id: 'automatehq',
    repo: 'AutoMateHQ',
    name: 'AI Automation HQ',
    kind: '자동화 작업 관제',
    platform: '웹',
    summary:
      '여러 GitHub 저장소와 자동화 작업을 한곳에서 감시·운영하고, 매일 오전 7시(한국 시간) 카카오톡 나와의 채팅으로 운영 보고서를 보내는 개인용 관제 시스템입니다.',
    facts: ['GitHub Actions 실행 폴링', '테스트 71개 · E2E 3개'],
    stack: ['React 19', 'Cloudflare Workers', 'D1'],
    status: 'building',
    statusNote: '개인 운영 중 · 정기 보고서 수신 확인 전',
    icon: true,
  },
];

export const earlier: Project[] = [
  {
    id: 'techlog',
    repo: 'TechLog',
    name: 'TechLog',
    kind: '기술 블로그',
    platform: '웹',
    summary: 'Gatsby로 만든 개인 기술 블로그. RSS, 사이트맵, 공개 조회수, 관련 글 추천.',
    facts: [],
    stack: ['Gatsby', 'React'],
    status: 'live',
    statusNote: '운영 중',
    link: { href: 'https://logic-phantom.github.io/', label: 'logic-phantom.github.io' },
  },
  {
    id: 'invitation',
    repo: 'invitation',
    name: '모바일 청첩장',
    kind: '웹 앱',
    platform: '웹',
    summary: '갤러리, 일정·날씨, 공유하기, 계좌 보기를 담은 모바일 청첩장.',
    facts: [],
    stack: ['Next.js', 'Tailwind CSS'],
    status: 'live',
    statusNote: '배포됨',
    link: { href: 'https://invitation-dusky-psi.vercel.app/', label: '사이트 보기' },
  },
  {
    id: 'emotiburn',
    repo: 'EmotiBurn',
    name: 'EmotiBurn',
    kind: '모바일 앱',
    platform: 'iOS · Android',
    summary: '적어 둔 감정을 불꽃 연출로 태워 보내는 Flutter 앱.',
    facts: [],
    stack: ['Flutter', 'Dart'],
    status: 'archived',
    statusNote: '2025',
  },
];

export const allProjects = [...released, ...building, ...earlier];

