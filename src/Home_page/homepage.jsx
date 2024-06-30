import React, { useState, useEffect } from 'react';
import Card from './card';
import Loader from '../Components/Loader';
import Pagination from './pagination';
import Ticker from 'framer-motion-ticker';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [topManga, setTopManga] = useState([]);
  const [randomManga, setRandomManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(8);

  const getTopManga = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/top/manga`);
      const data = await response.json();
      setTopManga(data.data);
    } catch (error) {
      console.error('Failed to fetch top manga:', error);
    }
  };

  // const getRandomManga = async () => {
  //   try {
  //     const response = await fetch(`https://api.jikan.moe/v4/characters`);
  //     const data = await response.json();
  //     setRandomManga(data.data.slice(0, 20));
  //   } catch (error) {
  //     console.error('Failed to fetch random manga characters:', error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getTopManga()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  const lastPostIndex = currentPage * cardPerPage;
  const firstPostIndex = lastPostIndex - cardPerPage;
  const currentPosts = topManga.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='pt-10'>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured Manga</h2>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">Discover the hottest bestsellers at our Top-Selling Manga page, where you'll find the most popular and must-read titles that everyone is talking about</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                {currentPosts.map(manga => (
                  <Card key={manga.mal_id} topManga={manga} />
                ))}
              </div>

              <Pagination totalPosts={topManga.length} cardPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
{/* 
              <section className="relative py-12 bg-white sm:py-16 lg:py-20">
                <div>
                  <h1 className="text-3xl font-bold text-center mt-8 text-black">Popular Characters</h1>
                  <div className="overflow-hidden whitespace-nowrap">
                    <Ticker duration={20}>
                      {randomManga.map((item, index) => (
                        <Link to={`/product/${item.mal_id}`} key={index} className="group relative block mx-4">
                          <div className="image-container relative h-[350px] sm:h-[450px]">
                            <img
                              src={item.images.jpg.image_url}
                              alt={`${item.name} image`}
                              className="main-image absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 brightness-50"
                            />
                            <img
                              src={item.images.jpg.large_image_url}
                              alt={`${item.name} image`}
                              className="hover-image absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 brightness-100 transition duration-300 ease-in-out"
                            />
                          </div>
                        </Link>
                      ))}
                    </Ticker>
                  </div>
                </div>
              </section> */}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
