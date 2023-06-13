export default function Hero() {
   const name = "MRiDev";
   const desc = "front-end developer and ui designer";

   return (
      <div className="py-80 relative overflow-hidden px-6 min-h-screen">
         <div className="relative z-10 m-auto text-center">
            <h1 className="text-white font-bold font-josefin tracking-widest text-6xl md:text-7xl lg:text-8xl xl:text-9xl ">{name}</h1>
            <h2 className="text-white font-bold text-lg text-center md:text-2 lg:text-3xl xl:text-4xl font-josefin tracking-widest uppercase mt-4">{desc}</h2>
         </div>

         <div className="relative w-full max-w-lg -mt-[28rem] mx-auto">
            <div className=" absolute top-52 -left-8 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl animate-blob opacity-50 animation-delay-3000"></div>
            <div className=" absolute top-60 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-blob opacity-20 md:opacity-30"></div>
            <div className=" absolute top-56 -right-4 w-56 h-56 bg-pink-400 rounded-full filter blur-3xl animate-blob opacity-40 animation-delay-5000"></div>
         </div>
      </div>
   );
}
