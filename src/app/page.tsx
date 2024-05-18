"use client";

import { useState } from "react";

import Image from "next/image";
import InputField from "./components/InputField";
import LanguageSelector from "./components/LanguageSelector";
import TranslationList from "./components/TranslationList";

export default function Home() {
  const [translations, setTranslations] = useState([]);
  const [selectedLangs, setSelectedLangs] = useState([]);

  const onSelected = (code, selected) => {
    setSelectedLangs(
      selected
        ? [...selectedLangs, code]
        : selectedLangs.filter((x) => x != code),
    );
  };

  const onTranslate = async (text) => {
    try {
      const response = await fetch(`/api?text=${text}&languages=${selectedLangs}`);
      const responseData = await response.json();

      const apiTranslations = await JSON.parse(responseData.result);
      setTranslations(apiTranslations.translations);
    } catch (error) {
      alert('Could not make translation due to a server error')
    }
  };

  return (
    <main className="flex flex-col px-20 py-4 mb-10">
      <div className="flex flex-row gap-8 justify-between flex-wrap w-full">
        <InputField onTranslate={async (input) => onTranslate(input)} />
        <LanguageSelector onSelected={onSelected} />
      </div>
      {translations.length != 0 && <TranslationList data={translations} />}
    </main>
  );
}
