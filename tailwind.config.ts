// import { Container } from "postcss";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      Container : {
        center: true,
        padding : "15Px"
      },      
      colors: {
        accent: "#08E95E"
             },
    },
  },
  plugins: [],
} ;
export default config;
