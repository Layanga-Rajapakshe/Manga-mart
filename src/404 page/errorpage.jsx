import React from 'react'
import { Link } from 'react-router-dom'

function errorpage() {
  return (
    <div>
      <div className="grid h-screen place-content-center bg-white px-4">
        <h1 className="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline">
        Go to Home
        </Link>
      </div>
    </div>
  )
}

export default errorpage
