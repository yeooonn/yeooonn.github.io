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
            팀의 생산성과 서비스의 지속 가능성을 함께 고민하는 3년차 프론트엔드
            개발자로서 <br />
            동료 개발자가 빠르게 이해하고 확장할 수 있는
            <strong> 가독성 높은 코드</strong>와<strong> 구조적인 설계</strong>
            를 개발의 중요한 기준으로 삼고 있습니다.
          </Typography.P1>
        </div>

        <div>
          <Typography.P1 className="text-xl font-light leading-relaxed">
            최근에는 Feature-Sliced Design(FSD) 아키텍처를 학습하고 실제
            프로젝트에 적용하며, <br />
            역할과 책임이 명확한 폴더 구조를 기반으로
            <strong> 결합도는 낮추고 응집도는 높이는 설계 경험</strong>을
            쌓았습니다.
            <br />
            이를 통해 기능 추가와 요구사항 변경에도 유연하게 대응할 수 있는
            코드베이스를 구축했고, <br />
            협업 과정에서의 커뮤니케이션 비용과 유지보수 부담을 함께 줄일 수
            있었습니다.
          </Typography.P1>
        </div>

        <div>
          <Typography.P1 className="text-xl font-light leading-relaxed">
            공통 컴포넌트와 도메인 단위 설계를 통해 유지보수성과 확장성을
            지속적으로 개선하는 과정에서 개발의 재미를 느끼며, <br />
            단기적인 구현보다
            <strong> 장기적으로 안정적인 코드와 팀의 생산성</strong>을 높이는
            방향으로 고민하고 실천하는 개발자입니다.
          </Typography.P1>
        </div>

        <hr className="border-gray-300" />

        <div className="mt-20">
          <Typography.P1>보유 자격증</Typography.P1>
          <Typography.P2>정보처리기사 - 한국사업인력공단</Typography.P2>
        </div>
      </div>
    </section>
  );
};

export default About;
