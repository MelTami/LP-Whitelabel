import React from "react";
import Image from "next/image";
import { ITopic } from "./ITopic";

export function Topic({ title, text }: ITopic) {
  return (
    <div id="topic" className="flex flex-col gap-6">
      <div className="flex gap-2 align-middle">
        <div
          id="img"
          className="rounded-full border-bgray bg-bgray w-8 h-8 flex justify-center align-middle p-1"
        >
          <Image
            src="/lightining.png"
            alt="lightning gray"
            width={20}
            height={20}
          />
        </div>
        <h3 className="font-bold text-base text-lilac md:text-center">
          {title}
        </h3>
      </div>
      <p>{text}</p>
    </div>
  );
}
