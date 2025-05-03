"use client";
import React from "react";
import useStore from "@/store/store";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaNewspaper,
  FaSearch,
} from "react-icons/fa";

const TopHeader = () => {
  const { language, country, setLanguage, setCountry } = useStore();

  return (
    <div>
      <section id="top" className="pt-2 pb-2 bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Menu */}
            <div className="mt-2 md:w-7/12">
              <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2">
                <select
                  className="text-xs font-bold text-gray-800 border border-gray-300 rounded px-2 py-1"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="hi">Hindi</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                </select>

                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="text-xs font-bold text-gray-800 border border-gray-300 rounded px-2 py-1"
                >
                  <option value="in">India</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="fr">France</option>
                </select>
              </div>
            </div>

            {/* Right Social Icons */}
            <div className="md:w-5/12 mt-2 md:mt-0">
              <ul className="flex justify-end space-x-2">
                <li>
                  <a
                    href="#"
                    className="bg-orange-500 text-white w-6 h-6 flex items-center justify-center rounded-sm"
                  >
                    <FaFacebookF size={12} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-green-600 text-white w-6 h-6 flex items-center justify-center rounded-sm"
                  >
                    <FaInstagram size={12} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-yellow-500 text-white w-6 h-6 flex items-center justify-center rounded-sm"
                  >
                    <FaLinkedinIn size={12} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-sky-400 text-white w-6 h-6 flex items-center justify-center rounded-sm"
                  >
                    <FaPinterestP size={12} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-sm"
                  >
                    <FaYoutube size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="top_head" className="pt-3 pb-3">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Left - Email Subscribe */}
            <div className="mt-2">
              <div className="bg-gray-100 p-1 border text-black border-gray-200 flex">
                <input
                  type="text"
                  placeholder="search"
                  className="flex-1 bg-transparent border-0 text-sm px-2 outline-none"
                />
                <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded-none">
                  <FaSearch className="text-white" />
                </button>
              </div>
            </div>

            {/* Center - Logo */}
            <div className="text-center">
              <a
                href="#"
                className="text-2xl uppercase font-bold leading-tight"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center space-x-1">
                    <FaNewspaper className="text-orange-500 text-2xl" />
                    <span>
                      News<span className="text-orange-500">Paper</span>
                    </span>
                  </div>
                  <span className="text-sm text-white mt-1">
                    Start Your News With Us
                  </span>
                </div>
              </a>
            </div>

            {/* Right - Address and Contact */}
            <div className="mt-4 text-end text-sm">
              <ul className="flex flex-col md:flex-row justify-end items-center space-x-0 md:space-x-6">
                <li className="flex items-center text-white">
                  <FaMapMarkerAlt className="text-orange-500 mr-1" />
                  250 Main Street, 2nd Floor, Gurugram
                </li>
                <li className="flex items-center text-white mt-2 md:mt-0">
                  <FaPhoneAlt className="text-orange-500 mr-1" />
                  <a href="#" className="hover:underline">
                    +123 4567 890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopHeader;
