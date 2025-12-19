import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-2xl font-bold">
        ReactShop
      </Link>

      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/login" className="hover:text-yellow-300">Login</Link>
        <Link
          to="/cart"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded shadow hover:scale-105 transition transform"
        >
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}
