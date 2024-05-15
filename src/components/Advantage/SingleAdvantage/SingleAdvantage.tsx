import React from "react";
import Image from "next/image";
import { IAdvantage } from "./IAdvantage";

export function SingleAdvantage({ title, img, text, alt }: IAdvantage) {
  return (
    <div className="mb-12 flex flex-col justify-center items-center gap-5 md:items-center order-4 md:order-1 text-center">
      <h3 className="font-bold text-base text-lilac md:text-center">{title}</h3>
      <Image
        src={img}
        alt={alt}
        className="w-25 h-103"
        width={93}
        height={107}
      />
      <p className="align-center text-sm text-center">{text}</p>
    </div>
  );
}
