import React from 'react'

export default function search() {
  return (
    <div>
        <div className='max-w-xl mt-4'>
            <div className="overflow-hidden z-0 rounded-full relative p-3">
                <form role="form" className="relative flex z-50 rounded-full" >
                    <input type="search" placeholder="Find your manga here ..." className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none focus:shadow-outline w-full bg-white opacity-50 hover:opacity-100" 
                    />
                    <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-full font-semibold px-8 py-4 hover:bg-blue-400 focus:bg-blue-600 focus:outline-none">Search</button>
                </form>
            </div>
        </div>
    </div>
  )
}
