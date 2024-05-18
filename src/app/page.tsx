"use client";

import { useState } from "react";

import Image from "next/image";
import InputField from "./components/InputField";
import LanguageSelector from "./components/LanguageSelector";
import TranslationList from "./components/TranslationList";
import PreviousTranslations from "./components/PreviousTranslations";
import LoadingIndicator from "./components/LoadingIndicator";

export default function Home() {
  const [translations, setTranslations] = useState([]);
  const [selectedLangs, setSelectedLangs] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onSelected = (code, country, selected) => {
    setSelectedLangs(
      selected
        ? [...selectedLangs, { country, code }]
        : selectedLangs.filter((x) => x.code != code),
    );
  };

  const saveTranslation = (text, langs) => {
    const current = JSON.parse(localStorage.getItem("translations") || "[]");
    localStorage.setItem(
      "translations",
      JSON.stringify([...current, { text, langs }]),
    );
  };

  const onTranslate = async (text) => {
    setLoading(true);
    saveTranslation(text, selectedLangs);

    try {
      const response = await fetch(
        `/api?text=${text}&languages=${selectedLangs.map((e) => e.code)}`,
      );
      const responseData = await response.json();

      const apiTranslations = await JSON.parse(responseData.result);
      setTranslations(apiTranslations.translations);
      setLoading(false);
    } catch (error) {
      alert("Could not make translation due to a server error");
    }
  };

  return (
    <main className="flex flex-col px-20 py-4 mb-10">
      <div className="flex flex-row gap-8 justify-between flex-wrap w-full">
        <InputField onTranslate={async (input) => onTranslate(input)} />
        <LanguageSelector onSelected={onSelected} />
      </div>
      {isLoading && <LoadingIndicator />}
      {translations.length != 0 && !isLoading && (
        <TranslationList data={translations} />
      )}
      <PreviousTranslations />
    </main>
  );
}
