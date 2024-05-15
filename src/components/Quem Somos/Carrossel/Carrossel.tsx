"use client";
import React, { useState } from "react";
import Image from "next/image";

export function Carrossel() {
  const [clicked, setClicked] = useState(false);
  return (
    <section id="default-carousel" className="flex items-center">
      <div className="flex absolute w-526 items-center justify-between">
        <button
          type="button"
          className="border-white border-r-2 border-b-2 p-2 rotate-135 ml-2"
          onClick={() => setClicked(true)}
        ></button>
        <button
          type="button"
          className="border-white border-r-2 border-b-2 p-2 -rotate-45 mr-2"
          onClick={() => setClicked(false)}
        ></button>
      </div>
      <div className=" flex w-full">
        {clicked && (
          <Image
            src="/photovoltaic-panels-green.png"
            className="w-526 h-418"
            alt="panels"
            width={300}
            height={150}
          />
        )}
        {!clicked && (
          <Image
            src="/usina-solar.png"
            className="w-526 h-418"
            alt="usina"
            width={100}
            height={50}
          />
        )}
      </div>
    </section>
  );
}
