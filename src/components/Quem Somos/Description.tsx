import React from "react";
import { Carrossel } from "./Carrossel/Carrossel";

export default function Description() {
  return (
    <section className="font-sans bg-bggray py-46.32 pr-28.68 pl-120 ">
      <div className="gap-6 flex">
        <div id="text" className="gap-9.5 flex flex-col">
          <h2 className="font-bold text-adv">Conheça a Matrix Energia</h2>
          <div className="gap-4 flex flex-col">
            <div id="content" className="gap-2 flex flex-col font-medium">
              <p>
                Trazemos soluções de energia, para todos os tipos de
                consumidores, de alta a baixa tensão.
              </p>
              <p>
                <a className="font-bold">
                  Já proporcionamos mais de R$ 1 Bilhão em economia para nossos
                  clientes.{" "}
                </a>
                São + de 6.000 empresas e residências economizando todos os
                meses.
              </p>
              <p>No ano de 2023, nos destacamos como:</p>
            </div>
            <div className="font-medium gap-4 flex flex-col">
              <div className="gap-4 flex items-center">
                <hr className="border-lilac w-6 border-3 rounded-sm" />
                <p> 2ª maior comercializadora varejista de energia em 2023;</p>
              </div>
              <div className="gap-4 flex items-center">
                <hr className="border-lilac w-6 border-3 rounded-sm" />
                <p>
                  {" "}
                  6ª maior comercializadora de energia renovável no 3º trimestre
                  de 2023;
                </p>
              </div>
              <div className="gap-4 flex items-center">
                <hr className="border-lilac w-6 border-3 rounded-sm" />
                <p>
                  1ª comercializadora de energia a ser classificada com Rating A
                  pela S&P Global Ratings, em 2023. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <Carrossel />
      </div>
    </section>
  );
}
