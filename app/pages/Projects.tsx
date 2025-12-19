import SkillBox from "../components/SkillBox";
import Typography from "../components/Typography";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="w-full min-h-screen h-auto px-30 py-20 flex items-center"
    >
      <div className="w-full flex flex-col gap-7">
        <div className="mb-7">
          <h1>04</h1>
          <Typography.Head2>Projects</Typography.Head2>
        </div>

        {projects.map((exp, idx) => (
          <div key={idx}>
            <div className="mb-1">
              <Typography.P3 className="leading-relaxed text-[#999]">
                {exp.period}
              </Typography.P3>
              <Typography.P1 className="!text-3xl">
                {exp.project.title}
              </Typography.P1>
              <div className="flex justify-between items-center">
                <Typography.P2 className="font-medium mb-4 text-[#999] w-1/2">
                  {exp.project.explanation}
                </Typography.P2>
                <Typography.P2 className="font-medium mb-4 w-1/2">
                  [ 구현사항 ]
                </Typography.P2>
              </div>
            </div>

            <div className="text-xl font-light grid grid-cols-12 mb-10">
              <div className="col-span-6 flex flex-col gap-2 mr-10">
                <div className="h-70 border border-gray-400 flex justify-center items-center">
                  이미지 들어갈 예정
                </div>

                <div className="flex gap-6 mt-2 relative z-10">
                  {exp.project.github !== "" && (
                    <a href={exp.project.github} target="_blank">
                      <Typography.P3 className="border-b border-blue-500 text-blue-500">
                        Github →
                      </Typography.P3>
                    </a>
                  )}
                  {exp.project.site !== "" && (
                    <a href={exp.project.site} target="_blank">
                      <Typography.P3 className="border-b border-blue-500 text-blue-500">
                        Visit Site →
                      </Typography.P3>
                    </a>
                  )}
                </div>
              </div>

              <div className="col-span-6 flex flex-col gap-2">
                {exp.project.description.map((desc, dIdx) => (
                  <Typography.P2 key={dIdx} className="font-normal text-[#999]">
                    {desc}
                  </Typography.P2>
                ))}
                <div className="flex gap-3 flex-wrap mt-4">
                  {exp.project.skills.map((skill, sIdx) => (
                    <SkillBox key={sIdx} text={skill} />
                  ))}
                </div>
              </div>
            </div>

            {projects.length !== idx + 1 && (
              <hr className="border border-gray-200 my-10" />
            )}
          </div>
        ))}
      </div>

      {/* {projects.map((exp, idx) => (
          <div key={idx}>
            <div className="text-xl font-light grid grid-cols-12 mb-10">
              <div className="2xl:col-span-6 col-span-3">
                <Typography.P3 className="leading-relaxed text-[#999]">
                  {exp.period}
                </Typography.P3>
                <Typography.P3 className="leading-relaxed">
                  {exp.info}
                </Typography.P3>
              </div>

              <div className="2xl:col-span-6 col-span-9 flex flex-col gap-2">
                <Typography.P1 className="!text-3xl">
                  {exp.project.title}
                </Typography.P1>
                <Typography.P2 className="font-medium mb-4">
                  {exp.project.explanation}
                </Typography.P2>
                {exp.project.description.map((desc, dIdx) => (
                  <Typography.P2 key={dIdx} className="font-normal text-[#999]">
                    {desc}
                  </Typography.P2>
                ))}
                <div className="flex gap-3 flex-wrap mt-4">
                  {exp.project.skills.map((skill, sIdx) => (
                    <SkillBox key={sIdx} text={skill} />
                  ))}
                </div>

                <div className="flex gap-6 mt-2 relative z-10">
                  {exp.project.github !== "" && (
                    <a href={exp.project.github} target="_blank">
                      <Typography.P3 className="border-b border-blue-500 text-blue-500">
                        Github →
                      </Typography.P3>
                    </a>
                  )}
                  {exp.project.site !== "" && (
                    <a href={exp.project.site} target="_blank">
                      <Typography.P3 className="border-b border-blue-500 text-blue-500">
                        Visit Site →
                      </Typography.P3>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="h-100 border border-gray-400 flex justify-center items-center">
              이미지 들어갈 예정
            </div>

            {projects.length !== idx + 1 && (
              <hr className="border border-gray-200 my-10" />
            )}
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Projects;
