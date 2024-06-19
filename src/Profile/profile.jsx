import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from './profile_sidebar'
import { Profile_statistics_card_users, Profile_statistics_card_orders, Profile_statistics_card_sales } from './profile_statistics_card'
import Profile_users_table from './profile_users_table';
import Profile_recent_orders from './profile_recent_orders';
import Profile_user_orders from './profile_user_orders';

function profile() {
 const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto flex pt-24 pb-5">
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 bg-gray-200">
        {/* Your main content goes here */}
        <h1 className="text-2xl font-bold p-4 justify-items-center">Welcome Back {userInfo.username} !!!</h1>
        {userInfo && userInfo.isAdmin && 
        <div class="grid grid-cols-1 sm:grid-cols-3 p-4 gap-4">
          {/* {total users, total orders, total sales, total products} */}
          <Profile_statistics_card_users />
          <Profile_statistics_card_orders />
          <Profile_statistics_card_sales />
        </div>
        }
        {userInfo && !userInfo.isAdmin && 
        <div class="grid grid-cols-1 sm:grid-cols-3 p-4 gap-4">
          {/* {total users, total orders, total sales, total products} */}
          <Profile_statistics_card_orders />
        </div>
        }

        <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
    
          {/* users table */}
          <Profile_users_table />

          {/* orders table */}
          {userInfo && userInfo.isAdmin && 
          <Profile_recent_orders />
          }
          {userInfo && !userInfo.isAdmin && 
          <Profile_user_orders />
          }
        </div>
      </div>
    </div>
  )
}

export default profile
