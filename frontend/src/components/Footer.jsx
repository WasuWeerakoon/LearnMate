import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C244A] text-white pt-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">LearnMate</h1>
          <p className="text-gray-300 mt-3">
            Your digital companion for learning, notes, tutorials, and past papers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Courses</li>
            <li>Tutorials</li>
            <li>Past Papers</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 py-4 mt-10 border-t border-gray-700">
        © {new Date().getFullYear()} LearnMate — All Rights Reserved.
      </div>
    </footer>
  );
}
