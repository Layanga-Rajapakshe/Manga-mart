import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSettings, MdOutlineLogout, MdOutlineShoppingCart } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/api/usersApiSlice';
import toast from 'react-hot-toast';
import { logout } from '../redux/features/authSlice';

function Sidebar() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

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

  return (
    <div className="bg-gray-800 text-white w-20 md:w-48 lg:w-64 h-screen flex flex-col">
      <Helmet>
        <link href="https://fonts.cdnfonts.com/css/gang-of-three" rel="stylesheet" />
      </Helmet>
      {/* Sidebar Header */}
      <div className="py-4 px-6 bg-gray-900">
        <h1 className="text-2xl font-bold flex items-center"><CgProfile className='mr-4 md:text-5xl' /><span className="hidden md:inline">{userInfo.username}</span></h1>
      </div>

      {/* Sidebar Links */}
      <div className="flex-1 flex items-start">
        <ul className="py-4 w-full">
          <SidebarLink to='/profile' icon={<RxDashboard className="mr-2 text-2xl md:text-xl" />} text="Dashboard" />
          <SidebarLink to='/settings' icon={<MdOutlineSettings className="mr-2 text-2xl md:text-xl" />} text="Account Settings" />
          <SidebarLink to='/orders' icon={<BsBoxSeam className="mr-2 text-2xl md:text-xl" />} text={`${!userInfo.isAdmin ? 'My Orders':'All Orders'}`} />
          <SidebarLink to='/cart' icon={<MdOutlineShoppingCart className="mr-2 text-2xl md:text-xl" />} text="Cart" />
          <SidebarLink to='/wishlist' icon={<FaRegHeart className="mr-2 text-2xl md:text-xl" />} text="Wishlist" />
          <li className="px-6 py-4 text-red-400 hover:bg-gray-700 cursor-pointer">
            <button onClick={handleLogout} className="flex items-center">
              <MdOutlineLogout className="mr-2 text-2xl md:text-xl" />
              <span className="hidden md:inline">Logout</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Sidebar Footer */}
      <div className="flex items-center py-4 px-6 bg-gray-900">
        <p><Link to='/'>© <span style={{ fontFamily: 'Gang of Three, sans-serif' }} className="hidden md:inline">Manga Mart 2024</span></Link></p>
      </div>
    </div>
  );
}

// Component for sidebar links
const SidebarLink = ({ to, icon, text }) => (
  <li className="px-6 py-4 hover:bg-gray-700 cursor-pointer">
    <Link to={to} className="flex items-center">
      {icon}
      <span className="hidden md:inline">{text}</span>
    </Link>
  </li>
);

export default Sidebar;
