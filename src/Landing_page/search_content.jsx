import React from 'react'
import { Link } from 'react-router-dom'

export default function Search_content({mangaList}) {
    if (!mangaList) {
        return (
            <div>
                <h1>No results found</h1>
            </div>
        )
      }
  return (
    <div class="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {mangaList.map(Manga => (
					<div>
                    <Link to={`/product/${Manga.mal_id}`} className="group relative block">
                <div className="relative h-[350px] sm:h-[450px]">
                  <img
                    src={Manga.images.jpg.image_url}
                    alt="Manga Cover"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 brightness-50"
                  />
              
                  <img
                    src={Manga.images.jpg.image_url}
                    alt="Manga Cover"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>
              
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">{Manga.title}</h3>
                  
                  <span
                    className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Buy Now
                  </span>
                </div>
              </Link>
                  </div>
				))}
        </div>
    
  )
}
