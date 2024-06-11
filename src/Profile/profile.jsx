import React from 'react'
import './profile_sidebar'

import Sidebar from './profile_sidebar'

function profile() {
  return (
    <div className="container mx-auto flex pt-24 pb-5">
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 bg-gray-200">
        {/* Your main content goes here */}
      </div>
    </div>
  )
}

export default profile
