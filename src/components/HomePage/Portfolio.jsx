import NavLink from "../NavLink";

export default function Portfolio() {
   const portfolios = [
      {
         title: "Project 1",
         image: "/src/assets/images/portfolio1.png",
         desc: "Sed ut perspiciatis unde omnis iste natus error sitesy voluptatem accusantium doloremque lauda",
         url: "https://rauliqbal.my.id",
      },
      {
         title: "Project 2",
         image: "/src/assets/images/portfolio2.png",
         desc: "Sed ut perspiciatis unde omnis iste natus error sitesy voluptatem accusantium doloremque lauda",
         url: "https://rauliqbal.my.id",
      },
      {
         title: "Project 3",
         image: "/src/assets/images/portfolio3.png",
         desc: "Sed ut perspiciatis unde omnis iste natus error sitesy voluptatem accusantium doloremque lauda",
         url: "https://rauliqbal.my.id",
      },
   ];
   return (
      <section className="container">
         <h2 className="section-text mb-10">My Portfolio</h2>

         <div className="grid gap-8">
            {portfolios.map((portfolio) => (
               <div key={portfolio.id} className="relative rounded-3xl overflow-hidden h-[300px] md:h-auto">
                  <img className="w-full h-full object-cover" src={portfolio.image} alt={portfolio.title} />
                  <div className="absolute bg-gradient-to-t from-black inset-0 flex flex-col p-6 md:p-10 items-start justify-end opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
                     <h3 className="text-white font-semibold text-2xl md:text-4xl">{portfolio.title}</h3>
                     <p className="text-white mt-4">{portfolio.desc}</p>
                  </div>
               </div>
            ))}
         </div>
         <div className="flex justify-center">
            <NavLink className="btn-primary mt-10" href="/project">
               Read More
            </NavLink>
         </div>
      </section>
   );
}
