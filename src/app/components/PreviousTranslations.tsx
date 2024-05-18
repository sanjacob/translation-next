"use client"
import ReactCountryFlag from "react-country-flag";

export default function PreviousTranslations() {
  const translations = JSON.parse(localStorage.getItem('translations') || '[]');

  return (
    <aside className="my-12">
      <h3 className="font-bold text-lg">Previously translated ({translations.length})</h3>
      <ul className="flex flex-row flex-wrap mt-4">
        {translations.map(({ text, langs }, i) => (
          <li className="shadow rounded px-4 py-2" key={i}>
            {langs.map(({country}, i) => (
              <ReactCountryFlag
                className="emojiFlag"
                key={i}
                style={{ margin: '0 2px' }}
                countryCode={country}
              />))} {text}
          </li>
        ))}
      </ul>
    </aside>
  );
}
