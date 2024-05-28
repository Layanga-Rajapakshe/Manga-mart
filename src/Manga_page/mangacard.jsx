import React from 'react'
import Mangadetails from './mangadetails'

export default function Mangacard() {
  return (
    <div>
      <a href="#" className="block">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    className="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-md shadow-md"
  />

  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>

  <Mangadetails />
</a>
    </div>
  )
}
