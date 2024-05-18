import Translation from "./Translation";

export default function TranslationList({ data }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold">Translations</h2>
      <ul
        className="mt-4 grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
        }}
      >
        {data.map(({ country, name, text }) => (
          <Translation country={country} name={name}>
            {text}
          </Translation>
        ))}
      </ul>
    </section>
  );
}
