import Typography from "./Typography";

const SkillBox = ({ text }: { text: string }) => {
  return (
    <div className="border border-gray-300 w-auto self-start px-3 py-0.5 rounded-sm">
      <Typography.P3 className="text-gray-500">{text}</Typography.P3>
    </div>
  );
};

export default SkillBox;
