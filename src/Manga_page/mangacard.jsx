import React from 'react'
import Mangadetails from './mangadetails'

export default function Mangacard({Manga}) {
  return (
    <div>
      <a href="#" className="block">
  {/* <img
    alt="Manga Cover"
    src={Manga.images.jpg.image_url}
    className="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-md shadow-md"
  /> */}

  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{Manga.title}</h3>

  <Mangadetails manga={Manga}/>
</a>
    </div>
  )
}
