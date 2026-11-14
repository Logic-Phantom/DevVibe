const principles = [
  {
    title: '기기 안에서 끝낸다',
    body: '우리몫, 킵온, 내 차 어딨지?는 로그인과 서버 없이 동작합니다. 점심합의는 내 위치와 거리 계산을 기기 밖으로 보내지 않고, 공유 방에는 식당의 공개 좌표만 남깁니다. 서버는 여러 사람이 함께 써야 할 때만 붙입니다.',
  },
  {
    title: '검증한 것과 아닌 것을 나눠 적는다',
    body: '저장소마다 자동 테스트, 웹 미리보기, 실기기, 스토어 단계를 표로 나눠 두고, 확인하지 못한 항목은 “미확인”으로 남깁니다. 다음 작업을 이어받는 사람이 README 첫 화면만 보고 시작할 수 있게 하려는 습관입니다.',
  },
  {
    title: '공공데이터를 직접 가공한다',
    body: '사잇은 서울교통공사와 국토교통부 시간표로 수도권 581개 역의 역간 시간을 만들었고, 점심합의는 전국 영업 중 음식점 648,519곳을 격자 타일로 나눠 GitHub Pages에 올렸습니다. 원본 수집부터 좌표계 확인까지 스크립트로 남겨 다시 돌릴 수 있습니다.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <h2 className="h2">일하는 방식</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            HTML·CSS·JavaScript와 Java·Spring으로 실무를 시작했고, Figma로 화면을 그리는 일도 함께 했습니다.
            지금은 React Native와 Expo로 모바일 앱을 주로 만듭니다.
          </p>
          <p className="mt-6 font-mono text-xs text-faint">조용히 코딩하고, 과감히 배포한다.</p>
        </div>

        <ol className="border-t border-line">
          {principles.map((p, i) => (
            <li key={p.title} className="grid gap-3 border-b border-line py-8 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-sm text-faint">0{i + 1}</span>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
