import React from "react";

export function Question({ question, answer }) {
  return (
    <div>
      <article className="flex items-center justify-between p-4 border-b border-bordgray">
        <p>{question}</p>
        <button type="button" className="">
          Seta
        </button>
      </article>
      <article className="p-4">
        <p>{answer}</p>
      </article>
    </div>
  );
}
