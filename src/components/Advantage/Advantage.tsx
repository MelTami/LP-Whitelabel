import React from "react";
import Image from "next/image";
import tree from "./3736569 1.png";
import cellphone from "./image 43.png";
import pig from "./5209019 3.png";
import link from "./image 44.png";

export default function Advantage() {
  return (
    <section className="container pt-4 md:pt-12 font-sans">
      <h2 className="mb-8 md:mb-20 text-center text-adv font-bold text-gray-900">
        Conheça as vantagens
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 md:grid-cols-4 md:gap-8 lg:gap-20">
        <div className="mb-12 flex flex-col self-center gap-5 md:items-start order-4 md:order-1 ">
          <h3 className="font-bold text-base text-lilac md:text-center">
            Sustentável
          </h3>
          <Image
            src={tree}
            alt="little tree inside half earth"
            className="w-25 h-103"
          />
          <p className="align-center text-sm">
            Ajude o planeta sendo um consumidor de energia renovável.
          </p>
        </div>
        <div className="mb-12 flex flex-col items-center gap-5 md:items-start order-4 md:order-1">
          <h3 className="font-bold text-base text-lilac">Simples e digital</h3>
          <Image
            src={cellphone}
            alt="a hand in a cellphone"
            className="w-25 h-103"
          />
          <p className="align-center text-sm">
            Contrate de forma rápida e segura, sem pagar nada e sem sair de
            casa.
          </p>
        </div>
        <div className="mb-12 flex flex-col items-center gap-5 md:items-start order-4 md:order-1">
          <h3 className="font-bold text-base text-lilac">Zero investimento</h3>
          <Image src={pig} alt="pig" className="w-25 h-103" />
          <p className="align-center text-sm">
            Economize mais de uma conta de luz por ano sem gastar com instalação
            de placas solares.
          </p>
        </div>
        <div className="mb-12 flex-row self-center gap-5 md:items-start order-4 md:order-1">
          <h3 className="font-bold text-base text-lilac">Sem fidelidade</h3>
          <Image src={link} alt="broken link" className="w-25 h-103" />
          <p className="align-center text-sm">
            Tenha liberdade para cancelar quando quiser. De forma fácil, sem
            taxas ou multas.
          </p>
        </div>
      </div>
    </section>
  );
}
