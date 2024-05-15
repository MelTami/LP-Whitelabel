"use client";

import React, { useState } from "react";
import { vantagem } from "./Vantagem/Vantagem";
import { SingleAdvantage } from "./Vantagem/Advantage";

export default function Advantage() {
  const [advantage, setAdvantage] = useState(vantagem);
  return (
    <section className="pt-4 md:pt-12 font-sans flex flex-col justify-center items-center">
      <h2 className="mb-8 md:mb-20 text-center text-adv font-bold text-gray-900">
        Conheça as vantagens
      </h2>
      <div className="flex justify-center items-center px-22 align-top gap-16">
        {advantage.map((vantagem, index) => (
          <SingleAdvantage {...vantagem} key={index} />
        ))}
      </div>
    </section>
  );
}
