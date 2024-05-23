"use client";
import React, { useState } from "react";
import { Topic } from "./Topic";
import { element } from "./Topic/ITopic";

export default function GD() {
  const [topics, setTopics] = useState(element);
  return (
    <section className="font-sans justify-center flex flex-row pb-83.41 px-6">
      <div id="container" className="gap-16 flex flex-col">
        <div id="title">
          <h2 className="font-bold text-adv">
            Entenda mais sobre a Energia Solar por assinatura
          </h2>
        </div>
        <div id="grid" className="gap-14 flex flex-col">
          <div
            id="topic"
            className="flex flex-row flex-wrap lg:flex-nowrap gap-[4rem]"
          >
            {topics.map((topics, index) => (
              <Topic key={index} {...topics} />
            ))}
          </div>
          <div id="questions" className="text-sm font-medium">
            <p>
              Ainda restaram dúvidas?{" "}
              <a
                href="https://matrixenergia.com/"
                className="font-normal text-penblue underline"
              >
                Clique aqui
              </a>{" "}
              e fale agora com um de nossos especialistas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
