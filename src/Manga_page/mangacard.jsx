import React from 'react'
import Mangadetails from './mangadetails'

export default function Mangacard({manga}) {
  return (
    <div>
      <a href="#" className="block">
  <img
    alt="Manga Cover"
    src={manga.images.jpg.image_url}
    className="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-md shadow-md"
  />

  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{manga.title}</h3>

  <Mangadetails manga={manga}/>
</a>
    </div>
  )
}
