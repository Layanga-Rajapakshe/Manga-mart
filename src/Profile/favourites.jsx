import React from 'react'
import { useSelector } from 'react-redux';
import { selectFavoriteProduct } from '../redux/features/favouriteSlice';
import Card from '../Home_page/card';
import Sidebar from './profile_sidebar';

function favourites() {

  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div className="container mx-auto flex pt-24 pb-5">
    <Sidebar />
    {/* Main content */}
    <div className="flex-1 bg-gray-200">
      {/* Your main content goes here */}
      <div className=''>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Your Favourite Manga</h2>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">Find your favourites here</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {favorites.map((product) => (
                  <Card key={product.mal_id} topManga={product} />
                ))}
            </div>
        </div>
      </section>
    </div>
    </div>
  </div>
  )
}

export default favourites
