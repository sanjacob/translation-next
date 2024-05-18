"use client";

import React, { useState } from "react";
import languages from "../lib/languages";
import LanguageButton from "./LanguageButton";

export default function LanguageSelector({ onSelected }) {
  return (
    <div className="flex-grow flex-shrink basis-1/3 h-full">
      <h2 className="font-bold mb-2">
        Select one or more destination languages
      </h2>
      <ul className="flex-row flex gap-2 flex-wrap">
        {Object.entries(languages).map(([k, { country, name }]) => (
          <LanguageButton
            key={k}
            country={country}
            code={k}
            name={name}
            onSelected={onSelected}
          />
        ))}
      </ul>
    </div>
  );
}
