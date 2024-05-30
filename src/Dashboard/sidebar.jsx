import React from 'react'

export default function sidebar() {
  return (
    <div>
        <div className="bg-gray-800 text-white w-64 flex-shrink-0">
        <div className="p-5">
            <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <nav className="p-2">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Dashboard</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Analytics</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Settings</a>
        </nav>
        </div>
    </div>
  )
}
