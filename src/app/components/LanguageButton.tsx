"use client";

import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSelector({ onSelected, code, country, name }) {
  const [selected, setSelected] = useState(false);

  const select = () => {
    onSelected(code, country, !selected);
    setSelected(!selected);
  };

  return (
    <li>
      <button
        className={`${selected ? "bg-blue-200" : "bg-gray-300"}
                         rounded-md px-2 py-1 truncate
                        ${selected ? "hover:bg-blue-300" : "hover:bg-gray-200"}`}
        onClick={select}
      >
        <ReactCountryFlag
          className="emojiFlag"
          countryCode={country}
          aria-label={name}
        />
        {" " + name}
      </button>
    </li>
  );
}
