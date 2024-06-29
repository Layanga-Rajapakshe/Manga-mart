import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar';
import NavbarProfile from '../Landing_page/navbar_profile';
import weblogo from '../assets/web_logo_bg_removed.png';
import { Helmet } from 'react-helmet';
import { motion, useViewportScroll, useTransform } from "framer-motion";

const dropdownVariants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  closed: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 }
  }
};

const LargeScreenNavbar = ({
  isLandingPage,
  color,
  genres,
  userInfo,
  handleLogout,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [genresDropdownOpen, setGenresDropdownOpen] = useState(false);
  const genresDropdownRef = useRef(null);

  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 183, 255, 0)", "rgba(0, 183, 255, 1)"]
  );
  const height = useTransform(scrollY, [0, 100], [120, 60]);

  return (
    <header
      className={`${
        isLandingPage
          ? color
            ? 'bg-gray-900 py-4 fixed w-full z-20'
            : 'bg-transparent fixed z-20 w-full py-8'
          : 'bg-gray-900 py-4 fixed w-full z-20'
      } transition-all duration-1000`}
    >
      <Helmet>
        <link href="https://fonts.cdnfonts.com/css/gang-of-three" rel="stylesheet" />
      </Helmet>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <nav className={`hidden lg:flex md:items-center md:space-x-12 ${expanded ? 'block' : 'hidden'}`}>
            <Link to="/home" className="text-sm font-normal text-gray-400 hover:text-white transition-all duration-500">
              Home Page
            </Link>
            <Link to="/about" className="text-sm font-normal text-gray-400 hover:text-white transition-all duration-200">
              About Us
            </Link>
            <div className="relative" ref={genresDropdownRef}>
              <button
                onClick={() => setGenresDropdownOpen(!genresDropdownOpen)}
                className="text-sm font-normal text-gray-400 hover:text-white transition-all duration-200"
              >
                Genres
              </button>
              <motion.div
                initial={false}
                animate={genresDropdownOpen ? 'open' : 'closed'}
                variants={dropdownVariants}
                className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10"
              >
                {genres.map((item) => (
                  <Link
                    key={item.index}
                    to={`/genre/${item.name}/${item.index}`}
                    className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            </div>
          </nav>
          <div className={` ${userInfo ? 'pl-6' : 'pl-16'} shrink-0 justify-center`}>
            <Link to="/" className="flex transition-all duration-500" id="top">
              {!color ? (
                <h1 style={{ fontFamily: 'Gang of Three, sans-serif' }} className="text-white text-4xl">
                  Manga Mart
                </h1>
              ) : (
                <img 
                  src= {weblogo} 
                  alt='web_logo'
                  className='h-16'
                />
              )}
            </Link>
          </div>
          <div className="hidden lg:flex space-x-2">
            <SearchBar />
            {!userInfo && (
              <>
                <Link
                  className={`${
                    isLandingPage
                      ? color
                        ? 'group inline-block rounded-full bg-gradient-to-r from-blue-900 to-blue-600 p-[4px] text-gray-400 hover:text-white focus:outline-none focus:ring active:text-opacity-75'
                        : 'border-2 rounded-full text-gray-300 px-4 py-3 hover:bg-white hover:text-black'
                      : 'group inline-block rounded-full bg-gradient-to-r from-blue-900 to-blue-600 p-[4px] text-gray-400 hover:text-white focus:outline-none focus:ring active:text-opacity-75'
                  } transition-all duration-500`}
                  to="/login"
                >
                  <span
                    className={`${
                      isLandingPage
                        ? color
                          ? 'block rounded-full px-4 py-3 text-sm font-medium group-hover:bg-transparent bg-gray-900'
                          : 'bg-transparent'
                        : 'block rounded-full px-4 py-3 text-sm font-medium group-hover:bg-transparent bg-gray-900'
                    } transition-all duration-500`}
                  >
                    Log in
                  </span>
                </Link>
                <Link
                  className={`${
                    isLandingPage
                      ? color
                        ? 'group inline-block rounded-full bg-gradient-to-r from-blue-900 to-blue-600 p-[4px] text-gray-400 hover:text-white focus:outline-none focus:ring active:text-opacity-75'
                        : 'border-2 rounded-full text-gray-300 px-5 py-3 hover:bg-white hover:text-black'
                      : 'group inline-block rounded-full bg-gradient-to-r from-blue-900 to-blue-600 p-[4px] text-gray-400 hover:text-white focus:outline-none focus:ring active:text-opacity-75'
                  } transition-all duration-500`}
                  to="/signup"
                >
                  <span
                    className={`${
                      isLandingPage
                        ? color
                          ? 'block rounded-full px-5 py-3 text-sm font-medium group-hover:bg-transparent bg-gray-900'
                          : 'bg-transparent'
                        : 'block rounded-full px-5 py-3 text-sm font-medium group-hover:bg-transparent bg-gray-900'
                    } transition-all duration-500`}
                  >
                    Sign Up
                  </span>
                </Link>
              </>
            )}
            {userInfo && <NavbarProfile userInfo={userInfo} logoutHandler={handleLogout} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default LargeScreenNavbar;
