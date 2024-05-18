"use client";

import React, { useState } from "react";

export default function InputField({ onTranslate, onReset }) {
  const [input, setInput] = useState("");

  return (
    <div className="flex-grow flex-shrink basis-1/3 min-h-72 min-w-96 mb-12">
      <textarea
        className="border-solid border-1
                        rounded outline-none
                         h-full w-full p-8 text-xl bg-gray-100
                        resize-none"
        placeholder="Type something you want to translate"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></textarea>
      <div className="flex flex-row flex-wrap gap-2">
        <button
          className="p-2 my-4 shadow rounded bg-black text-white
                       hover:bg-gray-800"
          onClick={() => onTranslate(input)}
        >
          Translate
        </button>
        <button
          className="p-2 my-4 shadow rounded bg-black text-white
        hover:bg-gray-800"
          onClick={() => {
            setInput("");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
