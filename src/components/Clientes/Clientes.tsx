import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

export default function Clientes() {
  return (
    <section className="py-12 flex justify-center font-sans mx-2">
      <div className="gap-10 flex flex-col">
        <h2 className="font-bold text-adv text-center">
          Grandes empresas que confiam em nossas soluções
        </h2>
        <div className="pt-8 pl-2.5 pb-2.5 pr-2.5">
          <div className="flex flex-wrap flex-row gap-14 align-middle justify-center items-center">
            <Image
              src="/LogoBK.png"
              alt="logo do burguer king"
              width={51}
              height={56}
            />
            <Image
              src="/LogoMarista.png"
              alt="logo do colégio marista"
              width={97}
              height={58}
            />
            <Image
              src="/LogoToyota.png"
              alt="logo da toyota"
              width={62}
              height={40}
            />
            <Image
              src="/LogobrMalls.svg"
              alt="logo da brMalls"
              width={80}
              height={18}
            />
            <Image
              src="/LogoKlabin.png"
              alt="logo da klabin"
              height={71}
              width={50}
            />
          </div>
        </div>
        <div className="flex gap-6 justify-center items-center flex-col">
          <p className="text-base font-medium text-center">
            Não perca tempo, simule sua economia e comece a economizar agora!
          </p>
          <div className="flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
