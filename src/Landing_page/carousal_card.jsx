import React from 'react'

export default function Carousal_card({items}) {
  return (
    <a href="#" className="group block">
  <img
    src={items.images.jpg.image_url}
    alt="manga image"
    className="aspect-square w-full rounded object-cover"
  />

  <div className="mt-3">
    <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
      {items.title}
    </h3>

    
  {items.genres.map((item, index) => (
          <div key={index} >
            <span className="mt-1 whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700">
            {item.name}
            </span>
            
          </div>
        ))}

  </div>
</a>
  )
}
