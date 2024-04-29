import React from "react";
import style from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul>
        <li className={style.item}>Início</li>
        <li className={style.item}>Vantagens</li>
        <li className={style.item}>Como funciona</li>
        <li className={style.item}>Energia por assinatura</li>
        <li className={style.item}>Quem somos</li>
        <li className={style.item}>Nossos clientes</li>
        <li className={style.item}>FAQ</li>
      </ul>
    </nav>
  );
}
