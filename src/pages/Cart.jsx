import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, removeFromCart, updateQuantity }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🟢 EMPTY CART UI
  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-40 mb-6"
        />
        <h2 className="text-2xl font-semibold mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-6">
          Add items to place your order
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  // 🟢 NORMAL CART
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">My Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 border p-4 mb-4 rounded"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-contain"
          />

          <div className="flex-1">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-gray-600">₹ {item.price}</p>

            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-3 py-1 border"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-3 py-1 border"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold">
          Total: ₹ {total}
        </h2>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-orange-500 text-white px-6 py-2 rounded"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
