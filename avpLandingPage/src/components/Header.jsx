import React from 'react';
import avp_logo from '../assets/avp_logo.jpeg';
import 'typeface-poppins';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header
        className="fixed top-0 w-full z-50"
        style={{ backgroundColor: 'transparent' }}
      >
        <nav className="bg-gray-800 flex flex-wrap items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <a href="/">
              <img src={avp_logo} alt="AVP Logo" className="h-8 w-30 mr-2" />
            </a>
            <a href="/">
              <span className="text-white font-bold">AVP Group</span>
            </a>
          </div>
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="text-white cursor-pointer">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul className=" flex flex-col sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 sm:ml-auto">
            <li className="text-white">
              <a href="/">Home</a>
            </li>
            <li className="text-white">
              <a href="#service">Services</a>
            </li>

            <li className="text-white">
              <a href="#about">About</a>
            </li>
            <li className="text-white">
              <a href="#contact">Contact Us</a>
            </li>

            <li className="text-white">
              <Link to="/work">Our Work</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
};

export default Header;
