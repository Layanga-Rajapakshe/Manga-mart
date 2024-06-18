import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ topManga }) {
  return (
    <div className="card-container">
      <Link to={`/product/${topManga.mal_id}`} className="group relative block">
        <div className="image-container relative h-[350px] sm:h-[450px]">
          <img
            src={topManga.images.jpg.image_url}
            alt={`${topManga.title} image`}
            className="main-image absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 brightness-50"
          />

          <img
            src={topManga.images.jpg.large_image_url}
            alt={`${topManga.title} image`}
            className="hover-image absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 brightness-100 transition duration-300 ease-in-out"
          />
        </div>

        <div className='overlay absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>

        <div className="content absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="title text-xl font-medium text-white">{topManga.title}</h3>

          <p className="synopsis mt-1.5 text-pretty text-xs text-white">
            {topManga.synopsis.slice(0, 100) + '...'}
          </p>

          <span className="read-more mt-3 inline-block bg-gray-700 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            Read More
          </span>
        </div>
      </Link>
    </div>
  );
}
