import React from "react";
import { IList } from "./IList";

export function List({ number, title, text }: IList) {
  return (
    <li className="flex gap-6">
      <div className="flex flex-col gap-5">
        <div className=" rounded-full w-7 h-7 border border-black text-center text-base font-bold">
          {number}
        </div>
        <hr className="border-lilac rotate-90 border-2" />
      </div>
      <div>
        <h3 className="text-lilac font-bold text-base">{title}</h3>
        <p className="font-medium text-sm">{text}</p>
      </div>
    </li>
  );
}
