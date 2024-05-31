import React, { useState } from 'react';

const UserMenu = ({ userInfo, logoutHandler }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    userInfo && (
      <div className="relative inline-flex">
        <button
          onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-none text-gray-300 shadow-sm hover:text-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        >
          Options
          <svg
            className={`transform transition-transform ${userDropdownOpen ? 'rotate-180' : ''} size-4`}
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
        </button>

        {userDropdownOpen && (
          <div className="absolute right-0 mt-12 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg z-10" role="menu">
            <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
              <p className="text-sm text-gray-500">Signed in as</p>
              <p className="text-sm font-medium text-gray-800">{userInfo.username}</p>
            </div>
            <div className="mt-0 py-2 first:pt-3 last:pb-3">
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                href="/profile"
              >
                Account settings
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                href="#"
              >
                Cart
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                href="#"
              >
                Support
              </a>
              <button
                onClick={logoutHandler}
                className="w-full text-right flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-red-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default UserMenu;
