"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Country({ country }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/country/${country.alpha3Code}`)}
      className="cursor-pointer  dark:bg-gray-950 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
    >
      <Image
        src={country.flags.svg}
        alt={country.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{country.name}</h3>
        <p className="text-sm mb-1">
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p className="text-sm mb-1">
          <strong>Region:</strong> {country.region}
        </p>
        <p className="text-sm">
          <strong>Capital:</strong> {country.capital}
        </p>
      </div>
    </div>
  );
}
