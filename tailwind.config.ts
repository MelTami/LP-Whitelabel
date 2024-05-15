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
        "1086": "1086.52px",
        "68": "277px",
        "1104": "1104px",
        "228": "228px",
        "25": "97.36px",
        ".16": ".16rem",
        "65.77": "65.77px",
        "124": "124px",
        "79.85": "79.85px",
        "102": "102px",
        "91": "91px",
        "563.76": "563.76px",
        "456": "456px",
      },
      height: {
        "22.73": "1.421rem",
        "523": "32.688rem",
        "592": "592.87px",
        "103": "103.66px",
        "517": "517px",
        "71.94": "71.94px",
        "74.44": "74.44px",
        "52": "52px",
        "23": "23px",
        "63": "63px",
        "686": "686px",
        "729.67": "729.67px",
      },
      fontSize: {
        title: ["2rem", "2.14rem"],
        check: ["0.625rem", "1.5rem"],
        navbar: ["0.75rem", "1.5rem"],
        adv: ["1.5rem", "2.25rem"],
        faq: ["16px", "20px"],
      },
      padding: {
        "5px": "5px",
        "11.7": "11.7px",
        "40.68": "40.68px",
        "40.84": "40.84px",
        "46.32": "46.32px",
        "28.68": "28.68px",
        "120": "120px",
        "83.41": "83.41px",
        "117.5": "117.5px",
      },
      spacing: {
        "520": "520px",
        "349": "349.14px",
        "499": "499px",
        "38": "153px",
        "22": "90px",
        "29": "118px",
        "21": "87.5px",
      },
      colors: {
        lilac: "rgb(132, 73, 191, 1)",
        lgray: "rgb(180, 183, 186,1)",
        ngray: "rgba(91, 90, 90, 1)",
        bgray: "rgba(217, 217, 217, 1)",
        penblue: "rgba(31, 68, 150, 1)",
        bggray: "rgba(246, 246, 246, 1)",
        bordgray: "rgba(131, 133, 135, 1)",
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
      gap: {
        "8.5": "34px",
        "9.5": "38px",
        "18": "78px",
      },
      rotate: {
        "135": "135deg",
      },
    },
  },
  plugins: [],
};
export default config;
