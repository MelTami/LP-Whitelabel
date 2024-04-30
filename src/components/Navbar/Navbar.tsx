import React from "react";
import style from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul className="flex gap-x-4 font-lexend font-normal">
        <li>Início</li>
        <li>Vantagens</li>
        <li>Como funciona</li>
        <li>Energia por assinatura</li>
        <li>Quem somos</li>
        <li>Nossos clientes</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
}
