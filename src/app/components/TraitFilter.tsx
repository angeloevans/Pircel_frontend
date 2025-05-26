"use client";

type Props = {
  search: string;
  setSearch: (val: string) => void;
};

export default function TraitFilter({ search, setSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search house traits"
      className="border rounded px-2 py-1 w-full"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}