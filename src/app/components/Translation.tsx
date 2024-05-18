import ReactCountryFlag from "react-country-flag";

export default function Translation({ children, country, name }) {
  return (
    <li className="rounded min-h-32 max-h-64 min-w-64 p-4 shadow flex flex-col">
      <h4 className="font-bold mb-2">
        {country} {name}
      </h4>
      <div className="overflow-scroll max-h-full">
        <span className="">{children}</span>
      </div>
    </li>
  );
}
