import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../redux/api/usersApiSlice';
import { logout } from '../redux/features/authSlice';
import toast from 'react-hot-toast';
import SmallScreenNavbar from './SmallScreenNavbar';
import LargeScreenNavbar from './LargeScreenNavbar';

const Navbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const [color, setColor] = useState(false);
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
    <div>
      {/* Show LargeScreenNavbar on medium and larger screens */}
      <div className="hidden md:block">
        <LargeScreenNavbar
          isLandingPage={isLandingPage}
          color={color}
          userInfo={userInfo}
          handleLogout={handleLogout}
          genres={genres}
        />
      </div>
      {/* Show SmallScreenNavbar on small screens */}
      <div className="block lg:hidden">
        <SmallScreenNavbar
          isLandingPage={isLandingPage}
          color={color}
          userInfo={userInfo}
          handleLogout={handleLogout}
          genres={genres}
        />
      </div>
    </div>
  );
};

export default Navbar;
