import SkillBox from "../components/SkillBox";
import Typography from "../components/Typography";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="w-full bg-gray-50 p-30 flex items-center"
    >
      <div className="flex flex-col gap-7">
        <div>
          <h1>03</h1>
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
                <div className="flex gap-2">
                  <Typography.P1 className="text-xl leading-relaxed">
                    {project.title}
                  </Typography.P1>
                  <Typography.P3
                    key={project.periode}
                    className="font-normal items-center flex"
                  >
                    ({project.periode})
                  </Typography.P3>
                </div>
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
