// 숙련도 퍼센트 대신, 실제 저장소에서 쓰고 있는 곳을 적습니다.
const groups = [
  {
    area: '앱',
    items: [
      { name: 'React Native · Expo', where: '컷픽, 웨어로그, 킵온, 우리몫, 구도픽' },
      { name: 'EAS Build', where: 'Android 출시 빌드' },
      { name: 'ML Kit', where: '구도픽 얼굴·객체 감지' },
    ],
  },
  {
    area: '웹',
    items: [
      { name: 'TypeScript', where: '거의 모든 저장소' },
      { name: '앱인토스 SDK · Vite', where: '사잇, 점심합의, 내 차 어딨지?, 제출맞춤, 사이즈 어때?' },
      { name: 'Next.js · React', where: '이 사이트, 모바일 청첩장' },
      { name: 'Gatsby', where: 'TechLog 블로그' },
    ],
  },
  {
    area: '데이터 · 서버',
    items: [
      { name: 'Supabase (Postgres, RLS)', where: '점심합의, 컷픽, 웨어로그, 우리몫' },
      { name: 'SQLite', where: '킵온, 우리몫' },
      { name: 'Java · Spring Boot', where: '실무, Springboot-Restful' },
      { name: 'Python', where: '데이터 수집·가공 스크립트' },
    ],
  },
  {
    area: '게임 · 그 밖',
    items: [
      { name: 'Unity 6 · C#', where: 'TOWERGLIDE' },
      { name: 'Flutter · Dart', where: 'EmotiBurn' },
      { name: 'Vitest · GitHub Actions', where: '단위 테스트, CI' },
      { name: 'Git · SVN · Figma', where: '형상관리, 화면 설계' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="section">
      <div className="wrap">
        <h2 className="h2">스택</h2>
        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.area}>
              <h3 className="eyebrow">{g.area}</h3>
              <dl className="mt-4 border-t border-line">
                {g.items.map((it) => (
                  <div
                    key={it.name}
                    className="flex flex-col gap-1 border-b border-line py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="font-medium">{it.name}</dt>
                    <dd className="text-sm text-faint sm:text-right">{it.where}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
