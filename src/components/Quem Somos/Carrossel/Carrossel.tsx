"use client";
import React, { useState } from "react";
import Image from "next/image";

export function Carrossel() {
  const [clicked, setClicked] = useState(false);
  return (
    <section id="default-carousel" className="flex items-center">
      <div className="flex absolute w-526 items-center justify-between">
        <div className="rounded-full bg-white w-10 h-10 bg-opacity-60 ml-1">
          <button
            type="button"
            className="border-black border-r-2 border-b-2 p-2 rounded-sm rotate-135 ml-3.5"
            onClick={() => setClicked(!clicked)}
          ></button>
        </div>
        <div className="rounded-full bg-white w-10 h-10 bg-opacity-60 mr-1">
          <button
            type="button"
            className="border-black border-r-2 border-b-2 p-2 -rotate-45 rounded-sm ml-1.5 "
            onClick={() => setClicked(!clicked)}
          ></button>
        </div>
      </div>
      <div
        id="buttons"
        className=" flex w-526 flex-col gap-2 items-center overflow-auto"
      >
        {clicked && (
          <>
            <Image
              src="/photovoltaic-panels-green.png"
              alt="panels"
              className="transition-transform"
              width={526}
              height={150}
            />
            <div className="flex gap-2">
              <button
                className="rounded-full bg-lilac w-4 h-2 transition-transform"
                onClick={() => setClicked(true)}
              ></button>
              <button
                className="rounded-full bg-lgray w-2 h-2 transition-transform"
                onClick={() => setClicked(false)}
              ></button>
            </div>
          </>
        )}
        {!clicked && (
          <>
            <Image
              src="/usina-solar.png"
              alt="usina"
              width={526}
              height={50}
              className="transition-transform"
            />
            <div id="buttons" className="flex gap-2">
              <button
                className="rounded-full bg-lgray w-2 h-2 transition-transform"
                onClick={() => setClicked(true)}
              ></button>
              <button
                className="rounded-full bg-lilac w-4 h-2 transition-transform"
                onClick={() => setClicked(false)}
              ></button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
