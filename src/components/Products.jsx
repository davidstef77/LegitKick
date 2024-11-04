import React from "react";
import "../styles/Products.css" // adaugă stilizarea dacă este necesar

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price} lei</p>
          <p>{product.brand}</p>
          <button onClick={() => window.open("https://www.instagram.com/legitkicksbh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==")}>
            Contact on Instagram
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
