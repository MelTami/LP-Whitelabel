"use client";
import React, { useState } from "react";
import { faq } from "./Questions/questions";
import { Question } from "./Questions/Question";

export default function Questions() {
  const [cards, setCards] = useState(faq);
  return (
    <section className="p-8 px-12 font-sans bg-bggray">
      <div className="flex justify-center items-center flex-col gap-16">
        <h2 className="font-bold text-adv">Perguntas frequentes</h2>
        <div className="flex flex-col gap-16">
          <div>
            {cards.map((card, index) => (
              <Question {...card} key={index} />
            ))}
          </div>
          <div
            id="sigificados"
            className="justify-start flex flex-col gap-8 font-light text-xs"
          >
            <p className="font-medium text-sm">
              Ainda restaram dúvidas?{" "}
              <a className="font-normal text-penblue underline">Clique aqui</a>{" "}
              e fale agora com um de nossos especialistas.
            </p>
            <p>
              Energia solar por assinatura: Significa o uso de energia limpa
              pelo cliente da distribuidora local, reunido com outros
              consumidores por meio de cooperativa ou consórcio enquadrado na
              modalidade de geração compartilhada prevista na Lei nº 14.300/2022
              e na Resolução Normativa 1.000/2021 da ANEEL, e participante do
              Sistema de Compensação de Energia Elétrica (SCEE), sistema no qual
              a energia elétrica ativa é injetada por unidade consumidora com
              microgeração ou minigeração distribuída na rede da distribuidora
              local, posteriormente utilizada para compensar o consumo de
              energia elétrica ativa ou contabilizada como crédito de energia.
            </p>
            <p>
              A Matrix GD (Geração Distribuída), é uma plataforma de soluções em
              eficiência energética, utilizada para a prestação de serviços a
              entidades parceiras, como Cooperativas, Associações, Consórcios ou
              Condomínios, que têm sob sua gestão usinas de micro e minigeração
              para utilização no Sistema de Compensação de Energia Elétrica em
              favor de seus integrantes, através da modalidade de compensação
              geração compartilhada, nos termos da Lei nº 14.300, de 07 de
              janeiro de 2022. A assinatura do termo de adesão na Plataforma
              Matrix serve como instrumento para vinculação do usuário
              (consumidor de energia) diretamente com os Parceiros, sem a
              participação da Matrix GD, de modo que este ser torne membro de
              uma das entidades parceiras, para que, com isso, possa participar
              do Sistema de Compensação de Energia Elétrica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
