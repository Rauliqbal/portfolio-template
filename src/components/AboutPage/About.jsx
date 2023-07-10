export default function About() {
   const name = "Rauliqbal";

   return (
      <div className="container h-screen flex items-center justify-center mt-24 md:mt-0">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img src="https://rauliqbal1.vercel.app/images/about-img.webp" alt="" />
            <div>
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white !leading-tight">{name}</h1>
               <p className="text-white mt-8 tracking-wide text-lg leading-relaxed">
                  Hello, my name is Raul Iqbal, I am a Front End Developer and UI Designer, I am used to making projects with Vue JS and Tailwind CSS, I use git as version control and github to store my project source code.
               </p>
               <p className="text-white mt-4 tracking-wide text-lg leading-relaxed">I'm a graduate of Computer Network Engineering Vocational School and I`m looking for a job as a Front End Developer in a company.</p>

               <a className="btn-primary mt-8" href="javascript:(void0)">
                  Get CV
               </a>
            </div>
         </div>
      </div>
   );
}
