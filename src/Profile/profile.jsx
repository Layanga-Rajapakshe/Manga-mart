import React from 'react'
import Sidebar from './profile_sidebar'
import { useSelector } from 'react-redux'
import Profile_statistics_card from './profile_statistics_card'
import Profile_users_table from './profile_users_table';
import Profile_recent_orders from './profile_recent_orders';

function profile() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto flex pt-24 pb-5">
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 bg-gray-200">
        {/* Your main content goes here */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <Profile_statistics_card />
          <Profile_statistics_card />
          <Profile_statistics_card />
          <Profile_statistics_card />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
    
          {/* users table */}
          <Profile_users_table />

          {/* orders table */}
          <Profile_recent_orders />
        </div>
      </div>
    </div>
  )
}

export default profile
