/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            josefin: ["Josefin Sans", "sans-serif"],
         },
         container: {
            center: true,
            padding: "1rem",
         },
      },
   },
   plugins: [],
};
