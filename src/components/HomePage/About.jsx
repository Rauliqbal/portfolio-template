import NavLink from "../NavLink";

export default function About() {
   const name = "Rauliqbal";
   const passion = "Front-End Developer";
   const desc = "Freelance Front-End Developer and UI Designer based in Bekasi, Indonesian. Let's Work Together.";

   return (
      <section className="container text-center">
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white !leading-tight">
            Hello, Im <span className="text-primary">{name}</span> <br /> {passion}
         </h2>
         <p className="text-white max-w-lg mx-auto text-lg mt-8">{desc}</p>

         <div className="flex gap-8 items-center justify-center mt-10">
            <NavLink className="btn-primary" href="/project">
               Recent Works
            </NavLink>
            <NavLink className="btn-secondary" href="#">
               Get My CV
            </NavLink>
         </div>
      </section>
   );
}
