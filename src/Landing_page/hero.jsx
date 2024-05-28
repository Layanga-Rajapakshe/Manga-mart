import React, { useState , useEffect} from 'react';
import Carousel from './carousal';
import Search_content from './search_content';

function HeroSection() {
  const [items1, SetTopManga] = useState([]); 
  const [items2, SetTopMagazines] = useState([]);
  const [search, SetSearch] = useState("");
  const [mangaList, SetMangaList] = useState([]);

  const GetTopManga = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/manga`)
      .then(res => res.json());

    SetTopManga(temp.data.slice(0, 20));
  }

  const GetTopMagazines = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`)
      .then(res => res.json());

    SetTopMagazines(temp.data.slice(0, 20));
  }

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

  useEffect(() => {
    GetTopManga();
  }, []);
  useEffect(() => {
    GetTopMagazines();
  }, []);

    return (
      <div>
        <section className="relative py-12 bg-blue-900 sm:py-16 lg:py-20">
          <div class="absolute inset-0">
              <img class="object-cover object-right w-full h-full lg:object-center" src="src/assets/landingpagephoto.png" alt="" />
        </div>

        <div class="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="lg:w-2/3">
                <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">Welcome to the Grand Line Treasure Cove!</h1>
                <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">Embark on an epic voyage through our Manga Store, where adventure awaits at every turn. </p>

              <div className='max-w-xl mt-4'>
                <div class="overflow-hidden z-0 rounded-full relative p-3">
                    <form role="form" class="relative flex z-50 rounded-full" onSubmit={HandleSearch} >
                      <input type="search" placeholder="Find your manga here ..." className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none bg-gray-200" 
                        value={search}
                        onChange={e => SetSearch(e.target.value)}/>
                      <button class="bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-full font-semibold px-8 py-4 hover:bg-blue-400 focus:bg-blue-600 focus:outline-none">Search</button>
                    </form>
                    <div class="glow glow-1 z-10 animate-glow1 bg-red-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                    <div class="glow glow-2 z-20 animate-glow2 bg-green-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                    <div class="glow glow-3 z-30 animate-glow3 bg-yellow-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                    <div class="glow glow-4 z-40 animate-glow4 bg-blue-500 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                </div>
              </div>

              </div>
    
              <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
                <img className="w-full max-w-xs mx-auto lg:max-w-s xl:max-w-lg md:max-w-xs" src="src/assets/web_logo.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        {mangaList.length > 0 && (
        <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
          <h1 className="text-3xl font-bold text-center mt-8 text-white">Search Results</h1>
          <Search_content mangaList={mangaList} />
        </section>
      )}

        <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
          <div>
            <h1 className="text-3xl font-bold text-center mt-8 text-white">Top-Selling</h1>
            <Carousel items={items1} />
          </div>
        </section>

        <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
          <div>
            <h1 className="text-3xl font-bold text-center mt-8 text-white">Upcoming</h1>
            <Carousel items={items2} />
          </div>
        </section>

        </div>
      );
}

export default HeroSection;
