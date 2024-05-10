import React from "react";
import Image from "next/image";
import lighting from "./image 45.png";

export default function GD() {
  return (
    <section className="font-sans justify-center flex flex-row w-full px-29 pt-21">
      <div id="container" className="gap-16 flex flex-col">
        <div id="title">
          <h2 className="font-bold text-adv">
            Entenda mais sobre a Energia Solar por assinatura
          </h2>
        </div>
        <div id="content" className="gap-12 flex flex-col">
          <div id="grid" className="gap-14 flex">
            <div id="topic" className="flex flex-col gap-6">
              <div className="flex gap-2 align-middle">
                <div
                  id="img"
                  className="rounded-full border-bgray bg-bgray w-8 h-8 flex justify-center align-middle"
                >
                  <Image src={lighting} alt="lightning gray" className="" />
                </div>
                <h3 className="font-bold text-base text-lilac md:text-center">
                  O que é?
                </h3>
              </div>
              <p>
                É a modalidade onde a geração de energia elétrica ocorre em
                usinas solares, sendo distribuída aos assinantes de maneira
                remota, através das redes de distribuição.
              </p>
            </div>
            <div id="topic" className="flex flex-col gap-6">
              <div className="flex gap-2 align-middle">
                <div
                  id="img"
                  className="rounded-full border-bgray bg-bgray w-8 h-8 flex justify-center align-middle"
                >
                  <Image src={lighting} alt="lightning gray" />
                </div>
                <h3 className="font-bold text-base text-lilac md:text-center">
                  Por que é mais barato?
                </h3>
              </div>
              <p>
                As usinas conectadas à plataforma Matrix, devido à grande
                eficiência operacional, conseguem gerar energia a um custo
                significativamente reduzido, resultando em descontos na sua
                conta de luz.
              </p>
            </div>
            <div id="topic" className="flex flex-col gap-6">
              <div className="flex gap-2 align-middle">
                <div
                  id="img"
                  className="rounded-full border-bgray bg-bgray w-8 h-8 flex justify-center align-middle"
                >
                  <Image src={lighting} alt="lightning gray" />
                </div>
                <h3 className="font-bold text-base text-lilac md:text-center">
                  Quem pode assinar?
                </h3>
              </div>
              <p>
                Empresas ou pessoas físicas que gastem R$200,00 ou mais em suas
                contas de luz. A assinatura é válida para casas, apartamentos,
                estabelecimentos comerciais e até mesmo imóveis alugados.
              </p>
            </div>
          </div>
          <div id="questions" className="text-sm font-medium">
            <p>
              Ainda restaram dúvidas?{" "}
              <a
                href="https://matrixenergia.com/"
                className="font-normal text-penblue underline"
              >
                Clique aqui
              </a>{" "}
              e fale agora com um de nossos especialistas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
