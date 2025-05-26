import { House } from "../components/HouseCard";

export async function fetchHouses(): Promise<House[]> {
  const res = await fetch("http://localhost:5000/houses");
  if (!res.ok) {
    throw new Error("Failed to fetch houses");
  }
  const data: House[] = await res.json();
  return data;
}