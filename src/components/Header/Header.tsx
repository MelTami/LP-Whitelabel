import { Navbar } from "../Navbar/Navbar";
import Image from "next/image";
import logo from "./logo_matrix_laranja.png";
import rec from "./Rectangle 14 (Stroke).png";

export default function Header() {
  return (
    <header>
      <div className="flex gap-2">
        <div className="flex">
          <Image
            src={rec}
            alt="Purple square with a cross in the middle"
            className="w-5 h-5"
          />
          <p className="font-poppins text-purple-700 align-middle text-base font-semibold">
            Brand
          </p>
        </div>
        <div className="bg-black w-px h-5"></div>
        <Image src={logo} alt="Matrix Logo" width={63.99} height={22.73} />
        <Navbar />
      </div>
    </header>
  );
}
