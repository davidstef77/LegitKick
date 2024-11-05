import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import products from "../data/products.json"; // Asigură-te că importi produsele
import "../styles/HomePage.css"; // Stiluri comune

function Shoes() {
  const shoes = products.filter((product) => product.category === "Shoes");
  
  return (
    <>
      <NavBar />
      
      <div className="page-container">
        
        <Products products={shoes} />
      </div>
      <Footer />
    </>
  );
}

export default Shoes;
