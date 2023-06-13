import { useEffect } from "react";

export default function About() {
   useEffect(() => {
      document.title = "About";
   }, []);
   return <div>About</div>;
}
