import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaNewspaper } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div>

    <section id="top" className="pt-2 pb-2 bg-gray-100 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Menu */}
          <div className="mt-2 md:w-7/12">
            <ul className="text-xs font-bold flex flex-wrap mb-0 space-x-3 text-gray-800">
              <li><a href="#" className="text-orange-600">Home</a></li>
              <li><a href="#">Video</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Health</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Right Social Icons */}
          <div className="md:w-5/12 mt-2 md:mt-0">
            <ul className="flex justify-end space-x-2">
              <li>
                <a href="#" className="bg-orange-500 text-white w-6 h-6 flex items-center justify-center rounded-sm">
                  <FaFacebookF size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="bg-green-600 text-white w-6 h-6 flex items-center justify-center rounded-sm">
                  <FaInstagram size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="bg-yellow-500 text-white w-6 h-6 flex items-center justify-center rounded-sm">
                  <FaLinkedinIn size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="bg-sky-400 text-white w-6 h-6 flex items-center justify-center rounded-sm">
                  <FaPinterestP size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-sm">
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
                placeholder="Email"
                className="flex-1 bg-transparent border-0 text-sm px-2 outline-none"
              />
              <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded-none">
                Subscribe
              </button>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="text-center">
            <a href="#" className="text-2xl uppercase font-bold leading-tight">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center space-x-1">
                  <FaNewspaper className="text-orange-500 text-2xl" />
                  <span>News<span className="text-orange-500">Paper</span></span>
                </div>
                <span className="text-sm text-white mt-1">Start Your News With Us</span>
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
                <a href="#" className="hover:underline">+123 4567 890</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
 
    </div>
  )
}

export default TopHeader
