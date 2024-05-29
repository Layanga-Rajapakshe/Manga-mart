import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="py-4 bg-gray-900 sm:py-4" style={{ marginBottom: '0px' }}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link to="/" title="" className="flex" id="top">
              <img className="w-auto h-9" src="src/assets/web_logo.png" alt="MangaMatrix" />
            </Link>
          </div>

          <div className="flex md:hidden">
            <button type="button" className="text-white" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
              <span style={{ display: !expanded ? 'inline' : 'none' }} aria-hidden="true">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>

              <span style={{ display: expanded ? 'inline' : 'none' }} aria-hidden="true">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </div>

          <nav className={`hidden md:flex md:items-center md:justify-end md:space-x-12 ${expanded ? 'flex' : 'hidden'}`}>
            <Link to="/home" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Home Page </Link>
            <Link to="/about" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> About Us </Link>
            <Link to="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Genres </Link>
            <Link
               className="group inline-block rounded-full bg-gradient-to-r from-blue-900 to-blue-600 p-[2px] text-gray-400 hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                to="signup"
                >
               <span
                className="block rounded-full bg-gray-900 px-8 py-3 text-sm font-medium group-hover:bg-transparent"
               >
                Sign Up
                </span>
              </Link>
          </nav>
        </div>

        <nav style={{ display: expanded ? 'block' : 'none' }}>
          <div className="flex flex-col pt-8 pb-4 space-y-6">
            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Home Page </a>
            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> About Us </a>
            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Genres </a>
            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> SignUp </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
