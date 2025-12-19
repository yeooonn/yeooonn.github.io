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
          <div className="col-span-4 flex flex-col gap-2 mb-20">
            <Typography.P1 className="text-gray-400 mb-3">
              FRONTEND
            </Typography.P1>
            <Typography.P1>TypeScript</Typography.P1>
            <Typography.P1>React</Typography.P1>
            <Typography.P1>Next.js</Typography.P1>
          </div>

          <div className="col-span-4 flex flex-col gap-2">
            <Typography.P1 className="text-gray-400 mb-3">
              BACKEND & DATABASE
            </Typography.P1>
            <Typography.P1>Supabase</Typography.P1>
            <Typography.P1>Prisma</Typography.P1>
            <Typography.P1>Maria DB</Typography.P1>
          </div>

          <div className="col-span-4 flex flex-col gap-2">
            <Typography.P1 className="text-gray-400 mb-3">
              DEPLOY & INFRA
            </Typography.P1>
            <Typography.P1>Vercel</Typography.P1>
            <Typography.P1>Docker</Typography.P1>
          </div>

          <div className="col-span-4 flex flex-col gap-2">
            <Typography.P1 className="text-gray-400 mb-3">
              ARCHITECTURE / STRUCTURAL
            </Typography.P1>
            <Typography.P1>Feature-Sliced Design (FSD)</Typography.P1>
            <Typography.P1>Atomic Design</Typography.P1>
            <Typography.P1>Headless UI</Typography.P1>
            <Typography.P1>Presentation / Controller</Typography.P1>
          </div>

          <div className="col-span-4 flex flex-col gap-2">
            <Typography.P1 className="text-gray-400 mb-3">
              TESTING
            </Typography.P1>
            <Typography.P1>Playwright</Typography.P1>
            <Typography.P1>Storybook</Typography.P1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
