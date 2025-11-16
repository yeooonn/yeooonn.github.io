import Typography from "../components/Typography";

const Skill = () => {
  return (
    <section
      id="Skills"
      className="w-full h-screen px-30 flex items-center gap-10"
    >
      <div className="w-full flex flex-col gap-10">
        <div>
          <h1>02</h1>
          <Typography.Head2>Skills</Typography.Head2>
        </div>

        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-4 flex flex-col gap-2">
            <Typography.P1 className="text-gray-400 mb-3">
              LANGUAGES
            </Typography.P1>
            <Typography.P1>JavaScript</Typography.P1>
            <Typography.P1>TypeScript</Typography.P1>
          </div>
          <div className="col-span-4 flex flex-col gap-2">
            <Typography.P1 className="text-gray-400 mb-3">
              FRAMEWORKS & LIBRARY
            </Typography.P1>
            <Typography.P1>React</Typography.P1>
            <Typography.P1>Next.js</Typography.P1>
          </div>
          <div className="col-span-4 flex flex-col gap-2">
            <Typography.P1 className="text-gray-400 mb-3">
              STATE & DATA
            </Typography.P1>
            <Typography.P1>React Query</Typography.P1>
            <Typography.P1>Zustand</Typography.P1>
            <Typography.P1>Context API</Typography.P1>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4 flex flex-col gap-2">
            <Typography.P1 className="text-gray-400">STYLING</Typography.P1>
            <Typography.P1>Tailwind CSS</Typography.P1>
            <Typography.P1>Styled Components</Typography.P1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
