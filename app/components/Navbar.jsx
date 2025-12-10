"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Scroll to section handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">Brand</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li onClick={() => handleScroll("hero")} className="hover:text-blue-600 cursor-pointer">Home</li>
          <li onClick={() => handleScroll("feature")} className="hover:text-blue-600 cursor-pointer">Features</li>
          <li onClick={() => handleScroll("pricing")} className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li onClick={() => handleScroll("contact")} className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden block"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 text-lg font-medium">
          <li onClick={() => handleScroll("hero")} className="hover:text-blue-600 cursor-pointer">Home</li>
          <li onClick={() => handleScroll("feature")} className="hover:text-blue-600 cursor-pointer">Features</li>
          <li onClick={() => handleScroll("pricing")} className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li onClick={() => handleScroll("contact")} className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}
