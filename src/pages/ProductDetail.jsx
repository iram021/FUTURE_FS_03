import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 className="p-8">Product not found</h2>;
  }

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="border p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">
            {product.title}
          </h1>

          <p className="text-xl text-green-600 font-bold mb-4">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description || "High quality product"}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-orange-500 text-white px-6 py-3 rounded"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-blue-600 text-white px-6 py-3 rounded"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
