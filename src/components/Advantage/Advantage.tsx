import React from "react";
import Image from "next/image";
import tree from "./3736569 1.png";
import cellphone from "./image 43.png";
import pig from "./5209019 3.png";
import link from "./image 44.png";

export default function Advantage() {
  return (
    <section>
      <h2 className="w-68 text-adv top-10 left-499 font-sans font-bold relative">
        Conheça as vantagens
      </h2>
      <div className="gap-16 w-1104 h-64 top-38 left-22 flex relative">
        <div className="w-228 gap-8.5 flex-rpw">
          <h3 className="font-bold text-base text-lilac">Sustentável</h3>
          <Image
            src={tree}
            alt="little tree inside half earth"
            className="w-25 h-103"
          />
          <p className="align-center text-sm">
            Ajude o planeta sendo um consumidor de energia renovável.
          </p>
        </div>
        <div className="w-228 gap-8.5 flex-row">
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
        <div className="w-228 gap-8.5 flex-row">
          <h3 className="font-bold text-base text-lilac">Zero investimento</h3>
          <Image src={pig} alt="pig" className="w-25 h-103" />
          <p className="align-center text-sm">
            Economize mais de uma conta de luz por ano sem gastar com instalação
            de placas solares.
          </p>
        </div>
        <div className="w-228 gap-8.5 flex-row">
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
