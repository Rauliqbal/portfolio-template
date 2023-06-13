import { useState } from "react";
import NavLink from "./NavLink";

export default function NavBar() {
   const navBrand = "MRiDev";

   const navMenu = [
      {
         title: "Home",
         url: "/",
      },
      {
         title: "About",
         url: "/about",
      },
      {
         title: "Projects",
         url: "/project",
      },
   ];

   const [navbar, setNavbar] = useState(false);

   return (
      <nav className="w-full top-0 fixed bg-[#333333]/90 backdrop-blur-sm shadow z-50">
         <div className="justify-between container md:items-center md:flex md:px-8">
            <div>
               <div className="flex items-center justify-between py-3 md:py-8 md:block">
                  <a href="javascript:void(0)">
                     <h2 className="text-2xl font-bold text-white font-josefin">{navBrand}</h2>
                  </a>
                  <div className="md:hidden">
                     <button className="p-2 text-gray-700 rounded-md outline-none focus:ring-gray-400 focus:ring-2" onClick={() => setNavbar(!navbar)}>
                        {navbar ? (
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                 fillRule="evenodd"
                                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        ) : (
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                           </svg>
                        )}
                     </button>
                  </div>
               </div>
            </div>
            <div>
               <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                     {navMenu.map((menu) => (
                        <li key={menu.id} className="text-white group text-center relative">
                           <NavLink href={menu.url}>{menu.title}</NavLink>
                           <div className="w-0 h-[2px] rounded-sm  group-hover:w-full transition-all duration-200 ease-in-out absolute bg-blue-500 "></div>
                        </li>
                     ))}
                  </ul>

                  <div className="mt-3 space-y-2 md:hidden">
                     <NavLink href="/contact" className="btn-primary w-full ">
                        Contact Me
                     </NavLink>
                  </div>
               </div>
            </div>
            <div className="hidden space-x-2 md:inline-block">
               <NavLink href="https://instagram.com/raul.iqbl_" className="btn-primary">
                  Contact Me
               </NavLink>
            </div>
         </div>
      </nav>
   );
}
