import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import bk from "./Logo.png";
import marista from "./Group.png";
import toyota from "./Logo (1).png";
import br from "./Logo (2).png";
import klabin from "./image 37.png";

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
              src={bk}
              alt="logo do burguer king"
              className="w-65.77 h-71.94"
            />
            <Image
              src={marista}
              alt="logo do colégio marista"
              className="w-124 h-74.44"
            />
            <Image src={toyota} alt="logo da toyota" className="w-79.85 h-52" />
            <Image src={br} alt="logo da brMalls" className="h-23 w-102" />
            <Image src={klabin} alt="logo da klabin" className="h-63 w-91" />
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
