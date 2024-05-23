import { Inter, Lexend, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-poppins",
});
