import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const properties = [
  { id: 1, title: "Luxury Villa", type: "House", price: 250000, location: "Lagos", rooms: 4, image: "/villa.jpg" },
  { id: 2, title: "City Apartment", type: "Apartment", price: 80000, location: "Abuja", rooms: 2, image: "/apartment.jpg" },
  { id: 3, title: "Beach House", type: "House", price: 300000, location: "Lagos", rooms: 5, image: "/beachhouse.jpg" },
  { id: 4, title: "Modern Condo", type: "Condo", price: 150000, location: "Port Harcourt", rooms: 3, image: "/condo.jpg" },
  { id: 5, title: "Country Cottage", type: "House", price: 95000, location: "Ibadan", rooms: 3, image: "/cottage.jpg" },
  { id: 6, title: "Penthouse Suite", type: "Apartment", price: 400000, location: "Abuja", rooms: 5, image: "/penthouse.jpg" },
];

export default function PropertyCatalogue() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const clearFilters = () => {
    setSearch("");
    setType("");
    setLocation("");
    setRooms("");
    setMinPrice("");
    setMaxPrice("");
  };

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      return (
        p.title.toLowerCase().includes(search.toLowerCase()) &&
        (type ? p.type === type : true) &&
        (location ? p.location === location : true) &&
        (rooms ? p.rooms === parseInt(rooms) : true) &&
        (minPrice ? p.price >= parseInt(minPrice) : true) &&
        (maxPrice ? p.price <= parseInt(maxPrice) : true)
      );
    });
  }, [search, type, location, rooms, minPrice, maxPrice]);

  return (
    <div className="min-h-screen  bg-gray-50 p-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <input
          type="text"
          placeholder="Search properties..."
          className="px-4 py-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="px-3 py-2 border rounded-lg" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
        </select>

        <select className="px-3 py-2 border rounded-lg" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Port Harcourt">Port Harcourt</option>
          <option value="Ibadan">Ibadan</option>
        </select>

        <select className="px-3 py-2 border rounded-lg" value={rooms} onChange={(e) => setRooms(e.target.value)}>
          <option value="">Any Rooms</option>
          <option value="1">1 Room</option>
          <option value="2">2 Rooms</option>
          <option value="3">3 Rooms</option>
          <option value="4">4 Rooms</option>
          <option value="5">5+ Rooms</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          className="w-24 px-2 py-2 border rounded-lg"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          className="w-24 px-2 py-2 border rounded-lg"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
        >
          Clear All
        </button>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div className="relative overflow-x-auto scrollbar-hide snap-x snap-mandatory grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
        {filtered.length === 0 ? (
          <p className="text-gray-500">No properties match your search.</p>
        ) : (
          filtered.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="snap-start min-w-[300px] bg-white shadow rounded-xl overflow-hidden flex-shrink-0"
            >
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-gray-500">{p.location}</p>
                <p className="mt-2 font-semibold">${p.price.toLocaleString()}</p>
                <p className="text-sm">{p.rooms} Rooms</p>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
