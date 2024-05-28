"use client";
import React, { useState } from "react";
import { vantagem } from "./SingleAdvantage/IAdvantage";
import { SingleAdvantage } from "./SingleAdvantage/SingleAdvantage";

export default function Advantage() {
  const [advantage, setAdvantage] = useState(vantagem);
  return (
    <section
      className="pt-4 md:pt-12 font-sans flex flex-col justify-center items-center gap-16"
      id="vantagens"
    >
      <h2 className="text-center text-adv font-bold text-gray-900">
        Conheça as vantagens
      </h2>
      <div className="flex justify-center items-center px-[22px] align-top gap-10 flex-wrap lg:flex-nowrap">
        {advantage.map((vantagem, index) => (
          <SingleAdvantage {...vantagem} key={index} />
        ))}
      </div>
    </section>
  );
}
