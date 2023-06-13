import { useEffect } from "react";
import About from "../components/HomePage/About";
import Hero from "../components/HomePage/Hero";
import Portfolio from "../components/HomePage/Portfolio";
import Skill from "../components/HomePage/Skill";

export default function Home() {
   useEffect(() => {
      document.title = "Home - MRiDev";
   }, []);

   return (
      <div>
         <Hero />
         <About />
         <Skill />
         <Portfolio />
      </div>
   );
}
