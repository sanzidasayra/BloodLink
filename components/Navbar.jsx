"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-stone-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
         
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/bloodlink-logo.webp"
              alt="BloodLink Logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="font-bold text-2xl">BloodLink</h1>
          </div>

          <div className="hidden sm:flex space-x-6">
            <Link
              href="/"
              className={`text-xl hover:text-red-500 transition ${
                isActive("/") ? "text-red-500 font-bold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/donate"
              className={`text-xl hover:text-red-500 transition ${
                isActive("/donate") ? "text-red-500 font-bold" : ""
              }`}
            >
              Donate
            </Link>
            <Link
              href="/request"
              className={`text-xl hover:text-red-500 transition ${
                isActive("/request") ? "text-red-500 font-bold" : ""
              }`}
            >
              Request
            </Link>
            <Link
              href="/about"
              className={`text-xl hover:text-red-500 transition ${
                isActive("/about") ? "text-red-500 font-bold" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-xl hover:text-red-500 transition ${
                isActive("/contact") ? "text-red-500 font-bold" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden sm:flex space-x-4">
            <Link
              href="/signin"
              className="px-4 py-2 border text-xl border-white rounded hover:bg-white hover:text-red-600 transition"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-xl bg-white text-red-600 rounded hover:bg-red-700 hover:text-white transition"
            >
              Sign Up
            </Link>
          </div>

          <div className="flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-red-700 px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`block px-3 py-2 rounded transition ${
              isActive("/") ? "bg-red-800 font-bold" : "hover:bg-red-800"
            }`}
          >
            Home
          </Link>
          <Link
            href="/donate"
            className={`block px-3 py-2 rounded transition ${
              isActive("/donate") ? "bg-red-800 font-bold" : "hover:bg-red-800"
            }`}
          >
            Donate
          </Link>
          <Link
            href="/request"
            className={`block px-3 py-2 rounded transition ${
              isActive("/request") ? "bg-red-800 font-bold" : "hover:bg-red-800"
            }`}
          >
            Request
          </Link>
          <Link
            href="/about"
            className={`block px-3 py-2 rounded transition ${
              isActive("/about") ? "bg-red-800 font-bold" : "hover:bg-red-800"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`block px-3 py-2 rounded transition ${
              isActive("/contact") ? "bg-red-800 font-bold" : "hover:bg-red-800"
            }`}
          >
            Contact
          </Link>

          <Link
            href="/signin"
            className="block px-3 py-2 rounded hover:bg-red-800"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="block px-3 py-2 rounded hover:bg-red-800"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
