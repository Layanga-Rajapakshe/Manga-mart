import React from 'react'
import { useState, useEffect } from 'react';
import Card from './card';
import Carousel from './carousal';
import Search_content from './search_content';
import Loader from '../Components/Loader';

export default function Homepage() {
  const [topManga, SetTopManga] = useState([]);
  const [items2, SetTopMagazines] = useState([]);
  const [search, SetSearch] = useState("");
  const [mangaList, SetMangaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const HandleSearch = e => {
    e.preventDefault();

    FetchManga(search);
  }

  const FetchManga = async (query) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga?q=${query}&limit=20&order_by=title&sort=asc`);
      const data = await response.json();
      if (data.data) {
        SetMangaList(data.data);
      } else {
        console.error('Unexpected API response structure:', data);
      }
    } catch (error) {
      console.error('Failed to fetch manga:', error);
    }
  };
    
  
  const GetTopManga = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/manga`)
      .then(res => res.json());

    SetTopManga(temp.data.slice(0, 8));
  }
  const GetTopMagazines = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`)
      .then(res => res.json());

    SetTopMagazines(temp.data.slice(0, 20));
  }

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setData({ message: 'Data loaded successfully!' });
      setLoading(false);
    }, 5000); // 5 seconds delay
  }, []);

  useEffect(() => {
    GetTopManga();
  }, []);
  useEffect(() => {
    GetTopMagazines();
  }, []);

  return (
    <div className='pt-10'>
      {loading ? <Loader /> : 
      <div>
              <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured Manga</h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">Discover the hottest bestsellers at our Top-Selling Manga page, where you'll find the most popular and must-read titles that everyone is talking about</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
        {topManga.map(manga => (
					<Card key={manga.id} topManga={manga}/>
				))}
        </div>

        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full w-full">
                  <img
                    alt="web_logo"
                    src=""
                    className="absolute inset-0 w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-700">
                <span
                  className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-400"
                ></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl text-white">
                    Didn't found what you want. Find here ...
                  </h2>

              <div className='max-w-xl mt-4'>
                <div class="overflow-hidden z-0 rounded-full relative p-3">
                    <form role="form" class="relative flex z-50 rounded-full" onSubmit={HandleSearch} >
                      <input type="search" placeholder="Find your manga here ..." className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none bg-gray-200" 
                        value={search}
                        onChange={e => SetSearch(e.target.value)}/>
                      <button class="bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-full font-semibold px-8 py-4 hover:bg-blue-400 focus:bg-blue-600 focus:outline-none">Search</button>
                    </form>
                    <div class="glow glow-1 z-10 animate-glow1 bg-pink-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                    <div class="glow glow-2 z-20 animate-glow2 bg-purple-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                    <div class="glow glow-3 z-30 animate-glow3 bg-yellow-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                    <div class="glow glow-4 z-40 animate-glow4 bg-blue-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                </div>
              </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {mangaList.length > 0 && (
        <section className="relative py-12 bg-white sm:py-16 lg:py-20">
          <h1 className="text-3xl font-bold text-center mt-8 text-black">Search Results</h1>
          <Search_content mangaList={mangaList} />
        </section>
      )}

        <section className="relative py-12 bg-white sm:py-16 lg:py-20">
          <div>
            <h1 className="text-3xl font-bold text-center mt-8 text-black">Upcoming</h1>
            <Carousel items={items2} />
          </div>
        </section>
    </div>
      </section>
        </div>}
    </div>
  )
}
