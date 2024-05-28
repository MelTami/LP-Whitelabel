"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";
import { items } from "./List/IList";
import { List } from "./List/List";

export default function HowWork() {
  const [item, setItem] = useState(items);
  return (
    <section
      className="container flex gap-18 font-sans pb-8"
      id="funcionamento"
    >
      <div className=" hidden lg:block">
        <Image
          src="/photovoltaic-panels-green.png"
          alt="painel solar"
          width={456}
          height={686}
          className="object-cover"
        />
      </div>
      <div id="text-div" className="flex flex-col gap-12 justify-center">
        <div>
          <h2 className="font-bold font-sans text-adv pl-6">Como funciona?</h2>
        </div>
        <div id="topics" className="flex gap-6">
          <ul className="flex flex-col mx-6">
            {item.map((item, index) => (
              <List {...item} key={index} />
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Button />
        </div>
      </div>
    </section>
  );
}
