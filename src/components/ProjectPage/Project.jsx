import { NavLink } from "react-router-dom";

export default function Project() {
   const projects = [
      {
         title: "project 1",
         image: "/src/assets/images/portfolio1.png",
         url: "https://rauliqbal.my.id",
      },
      {
         title: "project 2",
         image: "/src/assets/images/portfolio2.png",
         url: "https://rauliqbal.my.id",
      },
      {
         title: "project 3",
         image: "/src/assets/images/portfolio3.png",
         url: "https://rauliqbal.my.id",
      },
   ];
   return (
      <div className="container mt-40">
         <h2 className="section-text mb-10">My Portfolio</h2>

         <div className="relative w-full max-w-lg mx-auto -z-10 ">
            <div className="absolute top-8 -left-4 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl animate-blob opacity-30 animation-delay-3000"></div>
            <div className="absolute top-0 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-blob opacity-30"></div>
            <div className="absolute top-16 -right-4  w-56 h-56  bg-pink-400 rounded-full filter blur-3xl animate-blob opacity-30 animation-delay-5000"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
               <NavLink href={project.url} key={project.id} className="bg-[#333333] rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition ease-in-out duration-300">
                  <img className="h-[300px] object-cover" src={project.image} alt="Cover ${project.title}" />
                  <div className="p-6">
                     <h4 className="text-3xl font-semibold text-white">{project.title}</h4>
                  </div>
               </NavLink>
            ))}
         </div>
      </div>
   );
}
