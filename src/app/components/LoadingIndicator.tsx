
export default function LoadingIndicator() {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold">Translations</h2>
      <ul
        className="mt-4 grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
        }}
      >
    {[...Array(4)].map((x, i) =>
      <li key={i} className="rounded h-36 min-w-64 p-4 shadow flex flex-col animate-pulse bg-gray-100"/>
    )}
  </ul>
    </section>
  );
}
