"use client";
export default function SearchBar({ onSearch , onFilter }) {
  return (
    <div className="flex md:flex-row gap-4 items-center justify-between w-full p-4 shadow-md">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-68">
        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search..."
          className="flex-1 px-4 py-2 outline-none"
        />
        <span className="px-3 text-gray-500">🔍</span>
      </div>

      <select
        onChange={(e) => onFilter(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 outline-none w-full md:w-auto"
      >
        <option className="bg-black text-white" value="Filter by Region">
          Filter by Region
        </option>
        <option className="bg-black text-white" value="Africa">
          Africa
        </option>
        <option className="bg-black text-white" value="America">
          America
        </option>
        <option className="bg-black text-white" value="Asia">
          Asia
        </option>
        <option className="bg-black text-white" value="Europe">
          Europe
        </option>
        <option className="bg-black text-white" value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
}
