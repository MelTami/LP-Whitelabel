import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <nav className="flex lg:w-2/4 mr-5 items-center">
      <input type="checkbox" id="NavBar" className="peer hidden lg:hidden" />
      <label htmlFor="NavBar" className="lg:hidden">
        <span className="flex bg-[url('/menu.svg')] w-[32px] h-[32px] bg-center"></span>
      </label>
      <ul className=" lg:flex-nowrap lg:flex lg:top-[8px] lg:pr-2 lg:flex-row lg:drop-shadow-none right-0 drop-shadow-md hidden absolute top-[48px] peer-checked:bg-white peer-checked:flex flex-col gap-x-4 font-sans font-normal text-ngray text-navbar">
        <li className="p-1 border-b whitespace-nowrap lg:border-0 ">
          <Link href="#simulação">Início</Link>
        </li>
        <li className="p-1 border-b whitespace-nowrap lg:border-0 ">
          <Link href="#vantagens">Vantagens</Link>
        </li>
        <li className="p-1 border-b whitespace-nowrap lg:border-0 ">
          <Link href="#funcionamento">Como funciona</Link>
        </li>
        <li className="p-1 border-b whitespace-nowrap lg:border-0 ">
          <Link href="#energia">Energia por assinatura</Link>
        </li>
        <li className="p-1 border-b whitespace-nowrap lg:border-0 ">
          <Link href="#quemsomos">Quem somos</Link>
        </li>
        <li className="p-1 border-b whitespace-nowrap lg:border-0 ">
          <Link href="#clientes">Nossos clientes</Link>
        </li>
        <li className="p-1 whitespace-nowrap">
          <Link href="#faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}
