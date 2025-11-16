import SkillBox from "../components/SkillBox";
import Typography from "../components/Typography";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="w-full h-screen bg-gray-50 px-30 py-20 flex flex-col gap-7"
    >
      <div>
        <h1>03</h1>
        <Typography.Head2>Experience</Typography.Head2>
      </div>

      <div className="text-xl font-light mt-10">
        <Typography.P2 className="leading-relaxed text-[#999]">
          2023.03 — PRESENT
        </Typography.P2>
        <Typography.Head3 className="leading-relaxed">쿤텍</Typography.Head3>
        <Typography.P1 className="font-normal text-[#999]">
          SCS 연구 개발팀 · 선임연구원
        </Typography.P1>
      </div>

      <div className="flex flex-col gap-3">
        <Typography.P1 className="text-xl leading-relaxed">
          AEZIZ — 오픈소스 관리 솔루션
        </Typography.P1>
        <Typography.P1 className="font-normal text-[#999]">
          • 공통 컴포넌트 개발로 개발 생산성 및 유지보수 효율 향상
        </Typography.P1>
        <Typography.P1 className="font-normal text-[#999]">
          • Recharts 기반 데이터 시각화 대시보드 구현
        </Typography.P1>
        <Typography.P1 className="font-normal text-[#999]">
          • React-Query 도입으로 API 호출 20% 감소
        </Typography.P1>
        <Typography.P1 className="font-normal text-[#999]">
          • useMemo·useCallback 적용으로 렌더링 성능 개선
        </Typography.P1>
        <Typography.P1 className="font-normal text-[#999]">
          • NH농협, 미래에셋, 국민은행, 우리은행 등 금융권 고객사 배포 성공
        </Typography.P1>
      </div>

      <SkillBox />
    </section>
  );
};

export default Experience;
