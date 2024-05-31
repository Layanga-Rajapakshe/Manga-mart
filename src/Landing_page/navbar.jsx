import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../redux/api/usersApiSlice';
import { logout } from '../redux/features/authSlice';
import Navbar_profile from './navbar_profile';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const [expanded, setExpanded] = useState(false);
  const [genresDropdownOpen, setGenresDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const genresDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error(error);
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
    { name: 'Action' },
    { name: 'Comedy' },
    { name: 'Drama' },
    // Add more genres as needed
  ];

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
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
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
            <Link to="/home" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Home Page
            </Link>
            <Link to="/about" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              About Us
            </Link>
            <div className="relative" ref={genresDropdownRef}>
              <button
                onClick={() => setGenresDropdownOpen(!genresDropdownOpen)}
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
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

            <Navbar_profile userInfo={userInfo} logoutHandler={logoutHandler} />

            {!userInfo && (
              <Link
                className="group inline-block rounded-full bg-gradient-to-r from-blue-900 to-blue-600 p-[2px] text-gray-400 hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                to="/signup"
              >
                <span className="block rounded-full bg-gray-900 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Sign Up
                </span>
              </Link>
            )}
          </nav>
        </div>

        <nav style={{ display: expanded ? 'block' : 'none' }}>
          <div className="flex flex-col pt-8 pb-4 space-y-6">
            <Link to="/home" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Home Page
            </Link>
            <Link to="/about" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              About Us
            </Link>
            <div className="relative" ref={genresDropdownRef}>
              <button
                onClick={() => setGenresDropdownOpen(!genresDropdownOpen)}
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
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

              <Navbar_profile userInfo={userInfo} logoutHandler={logoutHandler} />

            {!userInfo && (
              <Link to="/signup" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                Sign Up
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
