"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaNewspaper, FaSearch } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (name) =>
    setDropdownOpen(dropdownOpen === name ? null : name);

  const categories = [
    "Business",
    "Crime",
    "Domestic",
    "Education",
    "Entertainment",
    "Environment",
    "Food",
    "Health",
    "Lifestyle",
    "Politics",
    "Science",
    "Sports",
    "Technology",
    "Tourism",
    "World",
  ];

  return (
    <section id="header">
      <nav className="w-full border-b bg-orange-500" role="navigation">
        <div className="container mx-auto px-4 flex justify-between items-center py-3">

          {/* Mobile menu toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <img src="/icons-svg/list.svg" width="40" height="40" alt="Menu" />
          </button>

          {/* Offcanvas menu */}
          <div
            className={`fixed top-0 left-0 bg-white shadow-lg h-full w-80 z-40 transform transition-transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } md:static md:translate-x-0 md:bg-transparent md:shadow-none md:flex md:flex-row md:w-auto`}
          >
            {/* Offcanvas header for mobile */}
            <div className="flex items-center justify-between p-4 border-b md:hidden">
              <Link
                href="/"
                className="flex items-center text-orange-500 font-bold text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                <FaNewspaper className="mr-2" />
                News Times
              </Link>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <img src="/icons-svg/x.svg" width="30" height="30" alt="Close" />
              </button>
            </div>

            {/* Main navigation */}
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-4 text-sm font-medium p-4 md:p-0">
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaHouse className="mr-1" />
                </Link>
              </li>
              {categories.map((text) => (
                <li key={text}>
                  <Link
                    href={`/categories/${text.toLowerCase()}`}
                    className="p-3 block"
                    onClick={() => setMenuOpen(false)}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
