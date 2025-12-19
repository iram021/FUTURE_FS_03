import { Link } from "react-router-dom";
import React, { useState } from "react";
import products from "../data/products";

export default function Home({ addToCart }) {
  const [showMessage, setShowMessage] = useState(false);
  const [cartClicked, setCartClicked] = useState([]); // Track which product's Add to Cart clicked

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowMessage(true);
    setCartClicked([...cartClicked, product.id]); // Mark this product as added

    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="relative">
      {/* Popup Message */}
      {showMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50 animate-bounce">
          Product added to cart!
        </div>
      )}

      {/* Product Grid */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Link to={`/product/${product.id}`}>
  <img
    src={product.image}
    alt={product.title}
    className="w-full h-48 object-contain mb-4 rounded-lg"
  />
  <h2 className="text-lg font-semibold mb-2 hover:text-blue-600">
    {product.title}
  </h2>
</Link>

            <p className="text-gray-700 mb-4">₹ {product.price}</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

            {/* Show Buy Now button only after Add to Cart */}
            {cartClicked.includes(product.id) && (
              <button
                onClick={() => (window.location.href = "/checkout")}
                className="w-full mt-2 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
              >
                Buy Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
