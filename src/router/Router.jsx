import { Routes, Route } from "react-router-dom";
// Import Page
import Home from "../pages/Home";
import About from "../pages/About";

export default function Router() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="about" element={<About />} />
      </Routes>
   );
}
