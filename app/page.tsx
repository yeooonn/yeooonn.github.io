import About from "./pages/About";
import Contect from "./pages/Contect";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Contect />
    </div>
  );
}
