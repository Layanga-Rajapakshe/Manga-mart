import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { getFavoritesCount } from '../Utils/localStorage';
import { getCartCount } from '../Utils/cartUtils';
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: {
    opacity: 0,
    scale: 0.3,
    filter: "blur(20px)",
    transition: { duration: 0.2 }
  }
};

const menuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
      when: "afterChildren",
      staggerDirection: -1,
      staggerChildren: 0.06
    }
  }
};

const UserMenu = ({ userInfo, logoutHandler }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const cartCount = getCartCount();
  const wishlistCount = getFavoritesCount();
  const totalCount = cartCount + wishlistCount;

  return (
    userInfo && (
      <motion.div className="relative inline-flex"
        initial={false}
        animate={userDropdownOpen ? "open" : "closed"}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-none text-gray-300 shadow-sm hover:text-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        >
          Options
          {totalCount > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
              {totalCount}
            </span>
          )}
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg
              className={`transform transition-transform size-4`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </motion.div>
        </motion.button>

        <motion.div 
          className="absolute right-0 mt-12 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg z-10" 
          role="menu"
          variants={menuVariants}
          style={{ pointerEvents: userDropdownOpen ? "auto" : "none" }}
        >
          <motion.div className="flex items-center space-x-16 py-3 px-5 bg-gray-100 rounded-t-lg" variants={itemVariants}>
            <div>
              <p className="text-sm text-gray-500">Signed in as</p>
              <p className="text-sm font-medium text-gray-800">{userInfo.username}</p>
            </div>
            <Link to='/profile'>
              <CgProfile className='text-4xl' />
            </Link>
          </motion.div>
          <div className="mt-0 py-2 first:pt-3 last:pb-3">
            <motion.div variants={itemVariants}>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                to="/settings"
              >
                Account settings
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                to="/cart"
              >
                <span>Cart</span>
                <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">{cartCount}</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                to="/wishlist"
              >
                <span>Your wishlist</span>
                <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">{wishlistCount}</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <button
                onClick={logoutHandler}
                className="w-full text-right flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-red-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              >
                Logout
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    )
  );
};

export default UserMenu;
