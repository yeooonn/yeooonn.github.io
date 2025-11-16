import Typography from "../components/Typography";

const Contect = () => {
  return (
    <section
      id="Contect"
      className="w-full h-screen bg-gray-50 px-30 flex items-center"
    >
      <div className="flex flex-col gap-7">
        <div className="mb-20">
          <h1>05</h1>
          <Typography.Head2>Contect</Typography.Head2>
        </div>

        <div>
          <Typography.P1 className="text-gray-400">Email</Typography.P1>
          <Typography.P2>yeooonn0303@naver.com</Typography.P2>
        </div>
      </div>
    </section>
  );
};

export default Contect;
