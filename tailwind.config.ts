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
        "46": "11.25rem",
        "51": "12.813rem",
        "409": "25.563rem",
        "11.5": "2.875rem",
        "90": "21.813rem",
        "63.99": "3.999rem",
        "1280": "1280px",
        "710": "710px",
      },
      height: {
        "22.73": "1.421rem",
      },
      fontSize: {
        title: ["2rem", "2.14rem"],
        check: ["0.625rem", "1.5rem"],
        navbar: ["0.75rem", "1.5rem"],
      },
      padding: {
        "5px": "5px",
        "11.7": "11.7px",
        "40.68": "40.68px",
        "40.84": "40.84px",
      },
      spacing: {
        "520": "520px",
      },
      colors: {
        lilac: "rgb(132, 73, 191, 1)",
        lgray: "rgb(180, 183, 186,1)",
        ngray: "rgba(91, 90, 90, 1)",
      },
      borderWidth: {
        DEFAULT: "1px",
        "0": "0",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
        "0.7": "0.7px",
      },
    },
  },
  plugins: [],
};
export default config;
