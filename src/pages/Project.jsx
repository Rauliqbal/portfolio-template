import { useEffect } from "react";
import Projects from "../components/ProjectPage/Project";

export default function Project() {
   useEffect(() => {
      document.title = "Projects - MRiDev";
   });
   return (
      <div>
         <Projects />
      </div>
   );
}
