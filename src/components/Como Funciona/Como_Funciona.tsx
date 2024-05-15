"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";
import img from "./aerial-view-large-sustainable-electrical-power-plant-with-many-rows-solar-photovoltaic-panels 1.png";
import { items } from "./List/IList";
import { List } from "./List/List";

export default function HowWork() {
  const [item, setItem] = useState(items);
  return (
    <section className="container flex gap-18 font-sans pl-117.5">
      <div className="w-456 h-686">
        <Image
          src="/photovoltaic-panels-green.png"
          alt="painel solar"
          width={456}
          height={686}
          className="object-cover"
        />
      </div>
      <div id="text-div" className="flex flex-col gap-12">
        <div>
          <h2 className="font-bold font-sans text-adv">Como funciona?</h2>
        </div>
        <div id="topics" className="flex gap-6">
          <ul className="flex flex-col gap-6">
            {item.map((item, index) => (
              <List {...item} key={index} />
            ))}
          </ul>
        </div>
        <Button />
      </div>
    </section>
  );
}
