"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import BackBar from "@/components/Backbar";

export default function Details() {
  const { code } = useParams();
  const router = useRouter();

  const [country, setCountry] = useState(null);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setAllCountries(data);
      const found = data.find((c) => c.alpha3Code === code);
      setCountry(found);
    };
    if (code) fetchData();
  }, [code]);

  if (!country) return <p className="text-center mt-10">Loading...</p>;

  const borderButtons =
    country.borders?.map((borderCode) => {
      const borderCountry = allCountries.find(
        (c) => c.alpha3Code === borderCode
      );
      return (
        <button
          key={borderCode}
          onClick={() => router.push(`/country/${borderCode}`)}
          className="text-white border border-white px-3 py-1 rounded font-semibold bg-black hover:bg-white hover:text-black transition"
        >
          {borderCountry?.name || borderCode}
        </button>
      );
    }) || "No borders";

  return (
    <div className="flex flex-col">
      <BackBar />

      <div className="flex flex-wrap gap-10 p-10 m-5 rounded-lg shadow-lg max-md:flex-col max-md:p-5 max-md:m-2">
        <div className="flex-2 w-full max-w-[700px]">
          <Image
            src={country.flags.svg}
            alt={country.name}
            width={700}
            height={500}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center max-md:text-center max-md:items-center">
          <h2 className="text-2xl font-bold">{country.name}</h2>
          <p className="mt-2">
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
          <p>
            <strong>Top Level Domain:</strong>{" "}
            {country.topLevelDomain.join(", ")}
          </p>
          <p>
            <strong>Currencies:</strong>{" "}
            {country.currencies.map((c) => c.name).join(", ")}
          </p>
          <p>
            <strong>Languages:</strong>{" "}
            {country.languages.map((l) => l.name).join(", ")}
          </p>

          <div className="mt-5">
            <h3 className="font-semibold mb-2">Border Countries:</h3>
            <div className="flex flex-wrap gap-2">{borderButtons}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
