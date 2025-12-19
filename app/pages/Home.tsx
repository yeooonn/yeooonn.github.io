import Typography from "../components/Typography";

const Home = () => {
  return (
    <section id="Home" className="w-full h-screen px-30 flex items-center">
      <div>
        <div className="flex flex-col gap-5">
          <Typography.Head1 className="font-light">
            팀의 생산성을
          </Typography.Head1>
          <Typography.Head1>코드로 끌어올리는</Typography.Head1>
          <Typography.Head1 className="font-light">
            프론트엔드 개발자
          </Typography.Head1>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <Typography.P1 className="text-xl font-light">
            동료 개발자가 <strong>이해하기 쉬운 코드</strong>로 생산성을 높이는
            3년차 프론트엔드 개발자입니다.
          </Typography.P1>
          <Typography.P1 className="text-xl font-light">
            TypeScript / React / Next.js 기반의 웹 애플리케이션을 개발하며,
          </Typography.P1>
          <Typography.P1 className="text-xl font-light">
            구조와 설계를 개선해 <strong>유지보수</strong>와&nbsp;
            <strong>확장</strong>에 강한 코드를 짜는것을 좋아합니다.
          </Typography.P1>
        </div>
      </div>
    </section>
  );
};

export default Home;
