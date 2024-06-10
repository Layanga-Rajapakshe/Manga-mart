import React from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen flex flex-col">
      {/* Sidebar Header */}
      <div className="py-4 px-6 bg-gray-900">
        <h1 className="text-2xl font-bold">Sidebar</h1>
      </div>

      {/* Sidebar Links */}
      <div className="flex-1 flex flex-col justify-between">
        <ul className="py-4">
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">Profile</li>
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
        </ul>
      </div>

      {/* Sidebar Footer */}
      <div className="py-4 px-6 bg-gray-900">
        <p>Logout</p>
      </div>
    </div>
  );
}

export default Sidebar;
