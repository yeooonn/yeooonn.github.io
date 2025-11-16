import SkillBox from "../components/SkillBox";
import Typography from "../components/Typography";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="w-full h-screen bg-gray-50 px-30 flex items-center"
    >
      <div className="flex flex-col gap-7">
        <div>
          <h1>04</h1>
          <Typography.Head2>Experience</Typography.Head2>
        </div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="text-xl font-light flex flex-col gap-7">
            <div>
              <Typography.P2 className="leading-relaxed text-[#999]">
                {exp.period}
              </Typography.P2>
              <Typography.Head3 className="leading-relaxed">
                {exp.company}
              </Typography.Head3>
              <Typography.P1 className="font-normal text-[#999]">
                {exp.team}
              </Typography.P1>
            </div>

            {exp.projects.map((project, pIdx) => (
              <div key={pIdx} className="flex flex-col gap-3">
                <Typography.P1 className="text-xl leading-relaxed">
                  {project.title}
                </Typography.P1>
                {project.description.map((desc, dIdx) => (
                  <Typography.P1 key={dIdx} className="font-normal text-[#999]">
                    {desc}
                  </Typography.P1>
                ))}
                <div className="flex gap-3 flex-wrap">
                  {project.skills.map((skill, sIdx) => (
                    <SkillBox key={sIdx} text={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
