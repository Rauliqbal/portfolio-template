import { Routes, Route } from "react-router-dom";
// Import Page
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";

export default function Router() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="project" element={<Project />} />
      </Routes>
   );
}
