import React, { useState } from "react";
import { IQuestion } from "./questions";

export function Question({ question, answer }: IQuestion) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <article className="flex items-center justify-between p-4 border-b border-bordgray">
        <p
          className="cursor-pointer text-faq text-lilac font-semibold"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
        </p>
        <ul>
          {!showAnswer && (
            <li>
              <button
                type="button"
                className="border-black border-r-2 border-b-2 inline-block p-1 rotate-45"
                onClick={() => setShowAnswer(true)}
              ></button>
            </li>
          )}
          {showAnswer && (
            <li>
              <button
                type="button"
                className="border-black border-r-2 border-b-2 inline-block p-1 -rotate-135"
                onClick={() => setShowAnswer(false)}
              ></button>
            </li>
          )}
        </ul>
      </article>
      <article className="p-4">{showAnswer && <p>{answer}</p>}</article>
    </div>
  );
}
