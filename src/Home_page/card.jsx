import React from 'react'

export default function Card({topManga}) {
  return (
    <div>
      <a href="#" className="group relative block">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src={topManga.images.jpg.image_url}
      alt="manga image"
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 brightness-50"
    />

    <img
      src={topManga.images.jpg.large_image_url}
      alt="manga image"
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 brightness-100 transition duration-300 ease-in-out"
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-white">{topManga.title}</h3>

    <p className="mt-1.5 text-pretty text-xs text-white">
      {topManga.synopsis.slice(0, 100) + '...'}
    </p>

    <span
      className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      Buy Now
    </span>
  </div>
</a>
    </div>
  )
}
