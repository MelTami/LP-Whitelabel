import { Navbar } from "../Navbar/Navbar";
import Image from "next/image";
import logo from "./logo_matrix_laranja.png";
import rec from "./Rectangle 14 (Stroke).png";

export default function Header() {
  return (
    <header className="content-center left-px h-12 border-b-0.7 pb-3 pt-11.7 pr-40.68 pl-40.84 relative">
      <div className="flex gap-2 content-center">
        <div className="flex">
          <Image
            src={rec}
            alt="Purple square with a cross in the middle"
            className="w-5 h-5"
          />
          <p className="font-poppins text-lilac align-middle text-base font-semibold">
            Brand
          </p>
        </div>
        <div className="bg-black w-px h-5"></div>
        <Image src={logo} alt="Matrix Logo" className="w-63.99 h-22.73" />
        <Navbar />
      </div>
    </header>
  );
}
