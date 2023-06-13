import { useEffect } from "react";

import Hero from "../components/AboutPage/About";
import Skill from "../components/AboutPage/Skill";

export default function About() {
   useEffect(() => {
      document.title = "About - MRiDev";
   }, []);
   return (
      <div>
         <Hero />
         <Skill />
      </div>
   );
}
