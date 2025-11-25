import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0C244A] text-white px-8 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <span className="text-blue-400">L</span> LearnMate
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/papers">Papers</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Login Button */}
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-md font-semibold"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
