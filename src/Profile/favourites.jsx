import React from 'react'

function favourites() {
  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Your Favourite Manga</h2>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">Find your favourites here</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="relative flex flex-col items-center justify-center w-full h-80 bg-gray-100 rounded-lg">
                    <img className="w-32 h-32 rounded-full" src="https://cdn.myanimelist.net/images/manga/3/196671.jpg" alt="Manga cover" />
                    <p className="mt-4 text-sm font-medium text-gray-900">One Piece</p>
                    <p className="mt-1 text-sm font-normal text-gray-600">Eiichiro Oda</p>
                </div>
                <div className="relative flex flex-col items-center justify-center w-full h-80 bg-gray-100 rounded-lg">
                    <img className="w-32 h-32 rounded-full" src="https://cdn.myanimelist.net/images/manga/3/196671.jpg" alt="Manga cover" />
                    <p className="mt-4 text-sm font-medium text-gray-900">One Piece</p>
                    <p className="mt-1 text-sm font-normal text-gray-600">Eiichiro Oda</p>
                </div>
                <div className="relative flex flex-col items-center justify-center w-full h-80 bg-gray-100 rounded-lg">
                    <img className="w-32 h-32 rounded-full" src="https://cdn.myanimelist.net/images/manga/3/196671.jpg" alt="Manga cover" />
                    <p className="mt-4 text-sm font-medium text-gray-900">One Piece</p>
                    <p className="mt-1 text-sm font-normal text-gray-600">Eiichiro Oda</p>
                </div>
                <div className="relative flex flex-col items-center justify-center w-full h-80 bg-gray-100 rounded-lg">
                    <img className="w-32 h-32 rounded-full" src="https://cdn.myanimelist.net/images/manga/3/196671.jpg" alt="Manga cover" />
                    <p className="mt-4 text-sm font-medium text-gray-900">One Piece</p>
                    <p className="mt-1 text-sm font-normal text-gray-600">Eiichiro Oda</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default favourites
