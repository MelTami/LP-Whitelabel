import React from "react";

export function Navbar() {
  return (
    <div className="justify-end flex left-[300px] relative w-710">
      <nav>
        <ul className="flex gap-x-4 font-lexend font-normal text-ngray text-navbar">
          <li>Início</li>
          <li>Vantagens</li>
          <li>Como funciona</li>
          <li>Energia por assinatura</li>
          <li>Quem somos</li>
          <li>Nossos clientes</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </div>
  );
}