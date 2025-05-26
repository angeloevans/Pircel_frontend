"use client";

import React, { useState, useMemo } from "react";
import TraitFilter from "./TraitFilter";

export type Head = {
  id: string;
  firstName: string;
  lastName: string;
};

export type Trait = {
  id: string;
  name: string;
};

export type House = {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: Head[];
  traits: Trait[];
};

function isValidCssColor(color: string): boolean {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
}

function parseColors(colorString: string): string[] {
  return colorString
    .toLowerCase()
    .split(/and|,/)
    .map((c) => c.trim());
}

type Props = {
  house: House;
};

export default function HouseCard({ house }: Props) {
  const [search, setSearch] = useState("");

  const colors = parseColors(house.houseColours);
  const allColorsValid = colors.every(isValidCssColor);
  const gradient = allColorsValid
    ? `linear-gradient(to right, ${colors.join(", ")})`
    : `linear-gradient(to right, white, black)`;

  const filteredTraits = useMemo(() => {
    if (!search) return house.traits;
    const lowerSearch = search.toLowerCase();
    return house.traits.filter((trait) =>
      trait.name.toLowerCase().includes(lowerSearch)
    );
  }, [search, house.traits]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Header: House name and animal */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{house.name}</h2>
        <span className="text-sm italic text-gray-500">{house.animal}</span>
      </div>

      {/* Gradient line */}
      <div
        style={{
          background: gradient,
          height: "16px",
          borderRadius: "4px",
          marginBottom: "1rem",
        }}
      />

      {/* Founder */}
      <p className="mb-4 text-gray-700">
        Founder: <span className="font-semibold">{house.founder}</span>
      </p>

      {/* Trait Filter and Display */}
      <div className="p-2 border rounded">
        <TraitFilter search={search} setSearch={setSearch} />
        {filteredTraits.length > 0 ? (
          <ul className="flex flex-wrap gap-2 mt-2">
            {filteredTraits.map((trait) => (
              <li
                key={`${house.id}-${trait.id}`}
                className="bg-gray-800 text-white px-3 py-1 rounded cursor-pointer text-sm hover:bg-gray-700 transition"
              >
                {trait.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 mt-2">No traits match your search.</p>
        )}
      </div>
    </div>
  );
}