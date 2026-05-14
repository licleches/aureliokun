import { useState } from "react";
import Breadcrumb from "../Componentes/Breadcrumb";

export default function Products() {
  const [sizeFilter, setSizeFilter] = useState<string | null>(null);
  const [colorFilter, setColorFilter] = useState<string | null>(null);

const dogsArray = [
  {
    size: "S",
    color: "white",
    image: "https://placedog.net/400/300?id=1",
    name: "Gigi",
    age: 1,
  },
  {
    size: "M",
    color: "white",
    image: "https://placedog.net/400/300?id=2",
    name: "Tom",
    age: 2,
  },
  {
    size: "L",
    color: "white",
    image: "https://placedog.net/400/300?id=3",
    name: "Jake",
    age: 3,
  },
  {
    size: "S",
    color: "black",
    image: "https://placedog.net/400/300?id=4",
    name: "Hill",
    age: 1,
  },
  {
    size: "M",
    color: "black",
    image: "https://placedog.net/400/300?id=5",
    name: "Jack",
    age: 2,
  },
  {
    size: "L",
    color: "black",
    image: "https://placedog.net/400/300?id=6",
    name: "Jones",
    age: 3,
  },
  {
    size: "S",
    color: "brown",
    image: "https://placedog.net/400/300?id=7",
    name: "Herbert",
    age: 1,
  },
  {
    size: "M",
    color: "brown",
    image: "https://placedog.net/400/300?id=8",
    name: "Coco",
    age: 2,
  },
  {
    size: "L",
    color: "brown",
    image: "https://placedog.net/400/300?id=9",
    name: "Benny",
    age: 3,
  },
];

  const filteredDogs = dogsArray.filter((dog) => {
    if (sizeFilter && dog.size !== sizeFilter) return false;
    if (colorFilter && dog.color !== colorFilter) return false;
    return true;
  });

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-[#EDBB99]">
      <h1 className="text-4xl font-bold text-[#2E4053] mb-6">Adopt Page</h1>

      <Breadcrumb sizeFilter={sizeFilter} colorFilter={colorFilter} />

      <main className="w-full max-w-7xl">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredDogs.map((dog) => (
            <div key={dog.name} className="bg-white rounded-lg overflow-hidden shadow">
              <div className="w-full aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src={dog.image} 
                  alt={dog.name} 
                />
              </div>
              <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                <div><span className="font-semibold">Name:</span> {dog.name}</div>
                <div><span className="font-semibold">Size:</span> {dog.size}</div>
                <div><span className="font-semibold">Color:</span> {dog.color}</div>
                <div><span className="font-semibold">Age:</span> {dog.age} year{dog.age > 1 ? "s" : ""}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filtros */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Filter by</h2>

          {/* Size Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Size:</h3>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => setSizeFilter(null)} className={`px-5 py-2 rounded-md ${sizeFilter === null ? 'bg-orange-900 text-white' : 'bg-gray-100'}`}>All</button>
              <button onClick={() => setSizeFilter("S")} className={`px-5 py-2 rounded-md ${sizeFilter === "S" ? 'bg-orange-900 text-white' : 'bg-gray-100'}`}>S</button>
              <button onClick={() => setSizeFilter("M")} className={`px-5 py-2 rounded-md ${sizeFilter === "M" ? 'bg-orange-900 text-white' : 'bg-gray-100'}`}>M</button>
              <button onClick={() => setSizeFilter("L")} className={`px-5 py-2 rounded-md ${sizeFilter === "L" ? 'bg-orange-900 text-white' : 'bg-gray-100'}`}>L</button>
            </div>
          </div>

          {/* Color Filter */}
          <div>
            <h3 className="font-semibold mb-3">Color:</h3>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => setColorFilter(null)} className={`px-5 py-2 rounded-md ${colorFilter === null ? 'bg-orange-900 text-white' : 'bg-gray-100'}`}>All</button>
              <button onClick={() => setColorFilter("white")} className={`px-5 py-2 rounded-md ${colorFilter === "white" ? 'bg-orange-900 text-white' : 'bg-gray-100'}`}>White</button>
              <button onClick={() => setColorFilter("brown")} className={`px-5 py-2 rounded-md ${colorFilter === "brown" ? 'bg-orange-900 text-white' : 'bg-gray-100'}`}>Brown</button>
              <button onClick={() => setColorFilter("black")} className={`px-5 py-2 rounded-md ${colorFilter === "black" ? 'bg-orange-900 text-white' : 'bg-gray-100'}`}>Black</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}