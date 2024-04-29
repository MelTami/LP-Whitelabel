import { Navbar } from "../Navbar/Navbar";
import style from "./Header.module.css";
import Image from "next/image";
import logo from "./logo_matrix_laranja.png";
import rec from "./Rectangle 14 (Stroke).png";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <div className={style.brand}>
          <Image
            src={rec}
            alt="Purple square with a cross in the middle"
            width={18.67}
            height={18.67}
            className={style.imgbrand}
          />
          <p className={style.p}>Brand </p>
        </div>
        <Image
          src={logo}
          alt="Matrix Logo"
          width={63.99}
          height={22.73}
          className={style.imglogo}
        />
      </div>
      <div className={style.navbar}>
        <Navbar />
      </div>
    </header>
  );
}
