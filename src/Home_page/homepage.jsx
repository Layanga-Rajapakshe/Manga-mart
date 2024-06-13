import React, { useState, useEffect } from 'react';
import Card from './card';
import Carousel from './carousal';
import SearchContent from './search_content';
import Loader from '../Components/Loader';
import Pagination from './pagination';

export default function Homepage() {
  const [topManga, setTopManga] = useState([]);
  // const [items2, setTopMagazines] = useState([]);
  // const [search, setSearch] = useState("");
  // const [mangaList, setMangaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(8);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   fetchManga(search);
  // };

  // const fetchManga = async (query) => {
  //   try {
  //     const response = await fetch(`https://api.jikan.moe/v4/manga?q=${query}&limit=20&order_by=title&sort=asc`);
  //     const data = await response.json();
  //     if (data.data) {
  //       setMangaList(data.data);
  //     } else {
  //       console.error('Unexpected API response structure:', data);
  //     }
  //   } catch (error) {
  //     console.error('Failed to fetch manga:', error);
  //   }
  // };

  const getTopManga = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/top/manga`);
      const data = await response.json();
      setTopManga(data.data);
    } catch (error) {
      console.error('Failed to fetch top manga:', error);
    }
  };

  // const getTopMagazines = async () => {
  //   try {
  //     const response = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`);
  //     const data = await response.json();
  //     setTopMagazines(data.data.slice(0, 20));
  //   } catch (error) {
  //     console.error('Failed to fetch top magazines:', error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getTopManga()]);
      setLoading(false);
      setData({ message: 'Data loaded successfully!' });
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

              <Pagination totalPosts={topManga.length} cardPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

              {/* <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                      <div className="relative h-64 sm:h-80 lg:h-full w-full">
                        <img
                          alt="web_logo"
                          src="https://via.placeholder.com/300"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="relative flex items-center bg-gray-700">
                      <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-400"></span>

                      <div className="p-8 sm:p-16 lg:p-24">
                        <h2 className="text-2xl font-bold sm:text-3xl text-white">
                          Didn't find what you want? Search here ...
                        </h2>

                        <div className='max-w-xl mt-4'>
                          <div className="overflow-hidden z-0 rounded-full relative p-3">
                            <form role="form" className="relative flex z-50 rounded-full" onSubmit={handleSearch}>
                              <input type="search" placeholder="Find your manga here ..." className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none bg-gray-200"
                                value={search}
                                onChange={e => setSearch(e.target.value)} />
                              <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-full font-semibold px-8 py-4 hover:bg-blue-400 focus:bg-blue-600 focus:outline-none">Search</button>
                            </form>
                            <div className="glow glow-1 z-10 animate-glow1 bg-pink-400 rounded-full w-30 h-30 -top-10 -left-10 absolute"></div>
                            <div className="glow glow-2 z-20 animate-glow2 bg-purple-400 rounded-full w-30 h-30 -top-10 -left-10 absolute"></div>
                            <div className="glow glow-3 z-30 animate-glow3 bg-yellow-400 rounded-full w-30 h-30 -top-10 -left-10 absolute"></div>
                            <div className="glow glow-4 z-40 animate-glow4 bg-blue-400 rounded-full w-30 h-30 -top-10 -left-10 absolute"></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </section> */}

              {/* {mangaList.length > 0 && (
                <section className="relative py-12 bg-white sm:py-16 lg:py-20">
                  <h1 className="text-3xl font-bold text-center mt-8 text-black">Search Results</h1>
                  <SearchContent mangaList={mangaList} />
                </section>
              )} */}

              {/* <section className="relative py-12 bg-white sm:py-16 lg:py-20">
                <div>
                  <h1 className="text-3xl font-bold text-center mt-8 text-black">Upcoming</h1>
                  <Carousel items={items2} />
                </div>
              </section> */}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
