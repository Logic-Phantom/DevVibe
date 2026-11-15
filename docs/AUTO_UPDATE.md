# 포트폴리오 자동 갱신 규칙

매일 한 번 클라우드 에이전트(Claude Code 루틴)가 이 문서를 읽고 `src/data/projects.ts`를 갱신합니다.
사람이 직접 고칠 때도 같은 규칙을 따릅니다.

## 할 일

1. GitHub 공개 저장소 목록을 받습니다.
   `curl -s "https://api.github.com/users/Logic-Phantom/repos?per_page=100&sort=pushed"`
2. 최근 2일 안에 푸시된 저장소, 그리고 `projects.ts`에 없는 새 저장소의 README를 읽습니다.
   `curl -sL https://raw.githubusercontent.com/Logic-Phantom/<repo>/HEAD/README.md`
3. 아래 규칙에 맞춰 `src/data/projects.ts`만 고칩니다. 새 앱에 아이콘이 있으면 `scripts/fetch-icon.mjs`로 받습니다.
4. `npm ci && npx tsc --noEmit && npm run lint && npm run build`가 모두 통과할 때만 커밋하고 `master`에 푸시합니다.
5. 바꿀 것이 없으면 아무것도 커밋하지 않습니다.

## 넣지 않는 저장소

`Logic-Phantom`, `Logic-Phantom.github.io`, `DevVibe`, 포크, README가 제목 한 줄뿐인 저장소(예: `NDS`),
`Tlog`, `one-s-first-trip`, `Springboot_JPA`, `Springboot-Restful`.

## 내용 규칙

- 설명·숫자(테스트 수, 데이터 건수, 노선 수 등)는 README에 적힌 것만 씁니다. 추측하거나 반올림해 부풀리지 않습니다.
- `summary`는 1~2문장, `facts`는 2~3개, 각 항목은 짧은 명사구로 씁니다. 기존 항목의 말투를 따릅니다.
- 마케팅 문구, 이모지, “혁신적인”, “강력한”, “최고의” 같은 말은 쓰지 않습니다.
- 개인정보(이메일, 계정 ID, Supabase ref, 워크스페이스 번호 등)는 옮기지 않습니다.

## 상태 규칙

- 상태는 올리기만 합니다. `released`(출시)를 `building`으로 내리지 않습니다.
  저장소 주인이 직접 출시를 확인해 준 앱은 README에 “검토 중”으로 남아 있어도 출시로 둡니다.
- `building` → `released`로 올리는 것은 README에 “출시됨”, “출시(날짜)”, “현재 출시됨”처럼 출시가 끝났다는 말이 있을 때만 합니다.
  “검토 요청”, “출시 준비”, “비공개 테스트”는 출시가 아닙니다.
- 출시 날짜가 README에 있으면 `statusNote`를 `YYYY-MM-DD 출시`로, 없으면 기존 값을 그대로 둡니다.
- 새 저장소는 출시 증거가 없으면 `building`에 추가합니다.
- 히어로와 작업 섹션의 개수 문구(“토스 미니앱 다섯 개” 등)가 바뀌면 `src/components/Projects.tsx` 소개 문장과
  `src/app/layout.tsx`의 `description`도 맞춰 고칩니다.

## 아이콘

토스 미니앱은 보통 `assets/brand/console-icon-600.png`, Expo 앱은 `assets/images/icon.png`에 있습니다.
아이콘을 찾지 못하면 `icon` 필드를 빼 두면 이름 첫 글자로 대신 표시됩니다.

## 커밋

메시지 형식: `[자동 갱신] 포트폴리오 프로젝트 정보 업데이트 (YYYY-MM-DD)`
본문에 바뀐 앱과 이유(README의 어느 문장 근거인지)를 한 줄씩 적습니다.
