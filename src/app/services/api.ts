import { House } from "../components/HouseCard";

export async function fetchHouses(): Promise<House[]> {
  // const res = await fetch("http://localhost:5000/houses"); for local testing
  const res = await fetch("https://wizard-world-api.herokuapp.com/houses");  // This would change to deployed Backend API
  if (!res.ok) {
    throw new Error("Failed to fetch houses");
  }
  const data: House[] = await res.json();
  return data;
}
