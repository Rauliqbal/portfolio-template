import About from "../components/HomePage/About";
import Hero from "../components/HomePage/Hero";
import Portfolio from "../components/HomePage/Portfolio";
import Skill from "../components/HomePage/Skill";

export default function Home() {
   return (
      <div>
         <Hero />
         <About />
         <Skill />
         <Portfolio />
      </div>
   );
}
