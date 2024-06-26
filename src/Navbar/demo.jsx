import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../redux/api/usersApiSlice';
import { logout } from '../redux/features/authSlice';
import NavbarProfile from '../Landing_page/navbar_profile';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import SearchBar from './searchbar';
import weblogo from '../assets/web_logo_bg_removed.png';

const Navbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const [color, setColor] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [genresDropdownOpen, setGenresDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const genresDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  useEffect(() => {
    const handleScroll = () => {
      setColor(window.scrollY >= 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (genresDropdownRef.current && !genresDropdownRef.current.contains(event.target)) {
        setGenresDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const genres = [
    { name: 'Action', index: 1 },
    { name: 'Adventure', index: 2 },
    { name: 'Comedy', index: 4 },
    { name: 'Drama', index: 8 },
    { name: 'Romance', index: 22 },
    { name: 'Sci-Fi', index: 24 },
    { name: 'Horror', index: 14 },
    // Add more genres as needed
  ];

  return (
    <header
      className={`${
        isLandingPage
          ? color
            ? 'bg-gray-900 py-4 fixed w-full z-20'
            : 'bg-transparent fixed z-20 w-full py-4'
          : 'bg-gray-900 py-4 fixed w-full z-20'
      } transition-all duration-500`}
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
              {genresDropdownOpen && (
                <div 
                className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10"
                ref={genresDropdownRef}
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
                </div>
              )}
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
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              <span className={!expanded ? 'block' : 'hidden'} aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
              <span className={expanded ? 'block' : 'hidden'} aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        
        <nav className={`${expanded ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="flex flex-col place-items-center pt-8 pb-4 space-y-6 bg-gray-800 ">
            <SearchBar />
            <Link to="/home" className="text-base font-normal text-gray-400 hover:text-white transition-all duration-200">
              Home Page
            </Link>
            <Link to="/about" className="text-base font-normal text-gray-400 hover:text-white transition-all duration-200">
              About Us
            </Link>
            <div className="relative" ref={genresDropdownRef}>
              <button
                onClick={() => setGenresDropdownOpen(!genresDropdownOpen)}
                className="text-base font-normal text-gray-400 hover:text-white transition-all duration-200"
              >
                Genres
              </button>
              {genresDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                  {genres.map((item, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {userInfo && <NavbarProfile userInfo={userInfo} logoutHandler={handleLogout} />}
            {!userInfo && (
              <>
              <Link to="/login" className="text-base font-normal text-gray-400 hover:text-white transition-all duration-200">
              <strong>Log in</strong>
            </Link>
            <Link to="/signup" className="text-base font-normal text-gray-400 hover:text-white transition-all duration-200">
            <strong>Sign up</strong>
            </Link>
            </>
          )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;