import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import products from "../data/products.json"; // asigură-te că importăm produsele
import "../styles/HomePage.css";

function HomePage() {
  // Definim listele de produse pentru fiecare categorie
  const newRelease = products.filter((product) => product.category === "New Release").slice(0, 4);
  const shoes = products.filter((product) => product.category === "Shoes").slice(0,4);
  const trending = products.filter((product) => product.category === "Trending").slice(0,4);

  return (
    <>
      <NavBar />
      <Header />
      
      {/* Secțiuni categorisite */}
      <div className="categories">
        <h2>New Releases</h2>
        <Products products={newRelease} />

        <h2>Shoes</h2>
        <Products products={shoes} />

        <h2>Trending</h2>
        <Products products={trending} />
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
