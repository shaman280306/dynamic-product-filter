import { useState } from "react";
import "./index.css";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 700 },
  { id: 2, name: "Headphones", category: "Electronics", price: 150 },
  { id: 3, name: "Shoes", category: "Fashion", price: 90 },
  { id: 4, name: "T-Shirt", category: "Fashion", price: 40 },
  { id: 5, name: "Coffee Maker", category: "Home", price: 120 },
  { id: 6, name: "Chair", category: "Home", price: 85 },
];

export default function App() {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="container">
      <h1>Dynamic Product Filter</h1>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home">Home</option>
      </select>

      <div className="grid">
        {filteredProducts.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>{p.category}</p>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}