import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-lexend)"],
        poppins: ["var(--font-poppins)"],
      },
      width: {
        "429": "26.813rem",
        "397": "24.813rem",
        "128": "32rem",
      },
      fontSize: {
        title: ["2rem", "2.14rem"],
      },
      colors: {
        lilac: "rgb(132, 73, 191)",
      },
    },
  },
  plugins: [],
};
export default config;
