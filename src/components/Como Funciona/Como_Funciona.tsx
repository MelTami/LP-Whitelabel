import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import img from "./aerial-view-large-sustainable-electrical-power-plant-with-many-rows-solar-photovoltaic-panels 1.png";

export default function HowWork() {
  return (
    <section className="container flex gap-6 font-sans">
      <div>
        <Image src={img} alt="painel solar" />
      </div>
      <div id="text-div" className="flex flex-col gap-12">
        <div>
          <h2 className="font-bold font-sans text-adv">Como funciona?</h2>
        </div>
        <div id="topics" className="flex gap-6">
          <ul>
            <li className="flex gap-6">
              <div>
                <div className=" rounded-full w-7 h-7 border border-black text-center text-base font-bold">
                  1
                </div>
                <hr className="border-lilac" />
              </div>
              <div>
                <h3 className="text-lilac font-bold text-base">Geração</h3>
                <p className="font-medium text-sm">
                  A energia é gerada em uma usina parceira perto de você, na
                  modalidade geração distribuída;
                </p>
              </div>
            </li>
            <li className="flex gap-6">
              <div>
                <div className=" rounded-full w-7 h-7 border border-black text-center text-base font-bold">
                  2
                </div>
                <hr className="border-lilac" />
              </div>
              <div>
                <h3 className="text-lilac font-bold text-base">Assinatura</h3>
                <p className="font-medium text-sm">
                  Você simula sua economia por aqui, realiza o cadastro e assina
                  de forma digital;
                </p>
              </div>
            </li>
            <li className="flex gap-6">
              <div>
                <div className=" rounded-full w-7 h-7 border border-black text-center text-base font-bold">
                  3
                </div>
                <hr className="border-lilac" />
              </div>
              <div>
                <h3 className="text-lilac font-bold text-base">Distribuição</h3>
                <p className="font-medium text-sm">
                  A energia gerada é injetada na rede elétrica e a sua
                  distribuidora leva até o seu endereço;
                </p>
              </div>
            </li>
            <li className="flex gap-6">
              <div>
                <div className=" rounded-full w-7 h-7 border border-black text-center text-base font-bold">
                  4
                </div>
                <hr className="border-lilac" />
              </div>
              <div>
                <h3 className="text-lilac font-bold text-base">Pagamento</h3>
                <p className="font-medium text-sm">
                  Ao final do mês, você pagará a geração de energia, conforme o
                  seu consumo, e para a distribuidora, o custos de distribuição
                  e impostos;
                </p>
              </div>
            </li>
            <li className="flex gap-6">
              <div>
                <div className=" rounded-full w-7 h-7 border border-black text-center text-base font-bold">
                  5
                </div>
                <hr className="border-lilac" />
              </div>
              <div>
                <h3 className="text-lilac font-bold text-base">Desconto</h3>
                <p className="font-medium text-sm">
                  Na sua conta de luz, o desconto é apresentado na forma de
                  créditos, o que representa uma economia mensal de até 20%.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <Button />
      </div>
    </section>
  );
}
