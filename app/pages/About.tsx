import Typography from "../components/Typography";

const About = () => {
  return (
    <section
      id="About"
      className="w-full h-screen bg-gray-50 px-30 flex items-center"
    >
      <div className="flex flex-col gap-10">
        <div>
          <h1>01</h1>
          <Typography.Head2>About</Typography.Head2>
        </div>

        <div className="text-xl font-light mt-10">
          <Typography.P1 className="text-xl font-light leading-relaxed">
            특히 <strong>성능 최적화, 공통 컴포넌트 개발, UI/UX 개선</strong>에
            강점을 가지고 있으며, 기획자·디자이너·백엔드와 원활히 협업해 <br />
            실제 서비스 런칭 및 대형 고객사 배포 경험을 보유하고 있습니다.
          </Typography.P1>
        </div>

        <div>
          <Typography.P1 className="text-xl font-light leading-relaxed">
            농협, 미래에셋, 국민은행, 우리은행 등
            <strong> 금융권 고객사에 성공적으로 솔루션을 배포</strong>한 경험이
            있으며, React-Query 도입으로 <br />
            API 호출을 20% 감소시키고, 컴포넌트 패턴 개선으로 재사용성을 20%
            향상시킨 실적이 있습니다.
          </Typography.P1>
        </div>
      </div>
    </section>
  );
};

export default About;
