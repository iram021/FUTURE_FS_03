import React, { useState } from "react";

export default function Checkout({ cart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pincode: "",
    state: "",
    city: "",
    address: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    const { name, phone, pincode, state, city, address } = form;

    if (!name || !phone || !pincode || !state || !city || !address) {
      alert("Please fill all address details");
      return;
    }

    if (phone.length !== 10) {
      alert("Enter valid 10 digit mobile number");
      return;
    }

    if (pincode.length !== 6) {
      alert("Enter valid pincode");
      return;
    }

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-semibold text-green-600">
          🎉 Order Placed Successfully!
        </h1>
        <p className="mt-4">Your order will be delivered soon.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      {/* Address Form */}
      <div className="border p-6 rounded mb-6">
        <h2 className="font-semibold mb-4">Delivery Address</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <textarea
          name="address"
          placeholder="House no, Road name, Area"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded w-full mt-4"
          rows="3"
        />
      </div>

      {/* Order Summary */}
      <div className="border p-4 rounded mb-6">
        <h2 className="font-semibold mb-3">Order Summary</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mb-2 text-sm"
          >
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>₹ {item.price * item.quantity}</span>
          </div>
        ))}

        <hr className="my-3" />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹ {total}</span>
        </div>
      </div>

      {/* Place Order */}
      <button
        onClick={placeOrder}
        className="w-full bg-orange-500 text-white py-3 rounded text-lg"
      >
        Place Order
      </button>
    </div>
  );
}
