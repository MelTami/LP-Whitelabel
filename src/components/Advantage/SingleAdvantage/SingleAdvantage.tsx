import React from "react";
import Image from "next/image";
import { IAdvantage } from "./IAdvantage";

export function SingleAdvantage({ title, img, text, alt }: IAdvantage) {
  return (
    <div className="mb-12 flex lg:flex-col justify-center items-center gap-5 md:items-center order-4 md:order-1 lg:text-center">
      <Image src={img} alt={alt} width={72} height={67} />
      <div>
        <h3 className="font-bold text-base text-lilac">{title}</h3>
        <p className="align-center text-sm">{text}</p>
      </div>
    </div>
  );
}
