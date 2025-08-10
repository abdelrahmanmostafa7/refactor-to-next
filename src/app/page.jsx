"use client";
import { useState, useEffect } from "react";
import SearchBar from "../components/Searchbar";
import Country from "../components/Country";
export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (searchText) => {
    const value = searchText.toLowerCase();
    setFiltered(countries.filter((c) => c.name.toLowerCase().includes(value)));
  };

  const handleFilter = (region) => {
    setFiltered(
      region ? countries.filter((c) => c.region === region) : countries
    );
  };

  console.log(filtered.length);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(filtered.length ? filtered : countries).map((country) => (
          <Country key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
}
