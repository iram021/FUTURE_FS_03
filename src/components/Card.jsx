export default function Card({ product, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4">
      <div className="h-40 bg-gray-200 rounded mb-3"></div>

      <h3 className="font-semibold text-lg">{product.title}</h3>
      <p className="text-gray-600 mb-3">₹ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  )
}
