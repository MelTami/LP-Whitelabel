import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

export default function Clientes() {
  return (
    <section className="p-16 flex justify-center font-sans">
      <div className="gap-10 flex flex-col">
        <h2 className="font-bold text-adv text-center">
          Grandes empresas que confiam em nossas soluções
        </h2>
        <div className="pt-8 pl-8 pb-2.5 pr-2.5">
          <div className="flex gap-14 align-middle justify-center items-center">
            <Image
              src="/LogoBK.png"
              alt="logo do burguer king"
              className="w-65.77 h-71.94"
              width={66}
              height={72}
            />
            <Image
              src="/LogoMarista.png"
              alt="logo do colégio marista"
              className="w-124 h-74.44"
              width={124}
              height={74}
            />
            <Image
              src="/LogoToyota.png"
              alt="logo da toyota"
              className="w-79.85 h-52"
              width={80}
              height={52}
            />
            <Image
              src="/LogobrMalls.png"
              alt="logo da brMalls"
              className="h-23 w-102"
              width={102}
              height={23}
            />
            <Image
              src="/LogoKlabin.png"
              alt="logo da klabin"
              className="h-63 w-91"
              height={63}
              width={91}
            />
          </div>
        </div>
        <div className="flex gap-6 justify-center items-center flex-col">
          <p className="text-base font-medium">
            Não perca tempo, simule sua economia e comece a economizar agora!
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
}
