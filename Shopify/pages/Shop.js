import React, { useState } from "react";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import "../App.css";

const Shop = () => {
  const [query, setQuery] = useState("");

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="shop-page">
      <h1>Shop</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ProductCard key={p.id} p={p} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;