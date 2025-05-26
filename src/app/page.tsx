"use client";

import React, { useEffect, useState } from "react";
import HouseCard, { House } from "./components/HouseCard";
import { fetchHouses } from "./services/api";

export default function Home() {
  const [houses, setHouses] = useState<House[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await fetchHouses();
        setHouses(data);
      } catch (error) {
        console.error("Failed to fetch houses:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Filter houses by search term on name (case-insensitive)
  const filteredHouses = houses.filter((house) =>
    house.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-10 max-w-4xl mx-auto font-[Verdana] space-y-6">

      {/* Search input for filtering houses */}
      <input
        type="text"
        placeholder="Search houses"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-6 border rounded"
      />

      {loading && <p className="text-center text-gray-600">Loading houses...</p>}

      {!loading && filteredHouses.length === 0 && (
        <p className="text-center text-gray-500">No houses match your search.</p>
      )}

      {!loading &&
        filteredHouses.map((house) => <HouseCard key={house.id} house={house} />)}
    </main>
  );
}