import Typography from "../components/Typography";

const Home = () => {
  return (
    <section id="Home" className="w-full h-screen px-30 flex items-center">
      <div>
        <div className="flex flex-col gap-5">
          <Typography.Head1 className="font-light">
            사용자 경험을
          </Typography.Head1>
          <Typography.Head1>극대화하는</Typography.Head1>
          <Typography.Head1 className="font-light">
            프론트엔드 개발자
          </Typography.Head1>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <Typography.P1 className="text-xl font-light">
            2년차 프론트엔드 개발자로서 React / Next.js / TypeScript를 중심으로
            웹 애플리케이션을 개발합니다.
          </Typography.P1>
          <Typography.P1 className="text-xl font-light">
            성능 최적화와 UI/UX 개선에 강점을 가지고 있습니다.
          </Typography.P1>
        </div>
      </div>
    </section>
  );
};

export default Home;
