import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import products from "../data/products.json"; // Asigură-te că importi produsele
import "../styles/HomePage.css"; // Stiluri comune

function Brands() {
  const brands = [...new Set(products.map(product => product.brand))]; // Extrage lista unică de branduri
  
  return (
    <>
      <NavBar />
      
      <div className="page-container">
        
        <ul>
          {brands.map((brand, index) => (
            <li key={index}>{brand}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Brands;
