import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";
import "../App.css";

const Home = () => {
  const featured = PRODUCTS.slice(0, 4);

  
  const categories = [
    {
      name: "Dogs",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6qV9aK2ij08dBoV1FxB0BX74bAsuNdeXqA&s",
    },
    {
      name: "Cats",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59GDg4I0yvSkG0INqrtVZ2d1stvGcHBaq3Q&s",
    },
    {
      name: "Birds",
      img: "https://i.pinimg.com/736x/b5/fa/b1/b5fab1a8ff1abafe66e862cb96d1285d.jpg",
    },
    {
      name: "Fish",
      img: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-124623446/124623446.jpg",
    },
    {
      name: "Accessories",
      img: "https://5.imimg.com/data5/SELLER/Default/2024/6/429708431/UF/RO/JG/69944598/dog-accessories.jpg",
    },
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h1>Everything Your Pet Loves!</h1>
          <p>Toys, food, care & accessories — delivered with love.</p>
          <Link to="/shop">Shop Now</Link>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4BFuC61n9JpNTdHtccSX4NqGoRJFEKp3eQ&s"
          alt="pets"
        />
      </section>

      <section className="categories">
        <h2>Categories</h2>
        <div className="category-grid">
          {categories.map((c) => (
            <div key={c.name} className="category-card">
              <img src={c.img} alt={c.name} />
              <p>{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
