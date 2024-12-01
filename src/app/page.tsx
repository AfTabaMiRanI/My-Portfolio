import About from "./component/about";
import Contact from "./component/contact";
import Hero from "./component/hero";
import Projects from "./component/projects";
import Skill from "./component/skill";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Skill/>
      <Projects />
      <Contact />
    </div>
  );
}
