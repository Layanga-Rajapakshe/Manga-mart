import React, { useState, useEffect } from 'react';
import BackgroundVideo from './background_video';
import Carousel from '../Landing_page/carousal';

export default function Hero() {
  const [topManga, setTopManga] = useState([]);
  const [topMagazines, setTopMagazines] = useState([]);

  const getTopManga = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/top/manga`);
    const data = await response.json();
    setTopManga(data.data.slice(0, 20));
  };

  const getTopMagazines = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`);
    const data = await response.json();
    setTopMagazines(data.data.slice(0, 20));
  };

  useEffect(() => {
    getTopManga();
    getTopMagazines();
  }, []);

  return (
    <div>
      <BackgroundVideo videos={[
        'https://drive.google.com/uc?export=download&id=1fp-t91Zm22nLIfk8kH2E07HuD2dmo37f',
        'https://drive.google.com/uc?export=download&id=1ZBfePGKa9irs7kewt090aX_bfmQJ5NLA',
        'https://drive.google.com/uc?export=download&id=1dp_RYsGuenHSb-1DTjARPsQxQS_hanNy',
        'https://drive.google.com/uc?export=download&id=1p19sxbZUor0mB_PxXRCpui6wmHe1sBwt',
        'https://drive.google.com/uc?export=download&id=1yz7JZzN3Ym4ylddaDKp5euFYH9_3w59Q',
        'https://drive.google.com/uc?export=download&id=1BxsPs0DuXTIJctUAFub3KYnOna6m49Ls',
        'https://drive.google.com/uc?export=download&id=1ZBsrBYOCqa7Qy154REsAXCGCOJd3da7P',
        'https://drive.google.com/uc?export=download&id=14t3835W37jrIRX5iLNHRxJjliz3uakwD',
      ]}/>


      <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
        <div>
          <h1 className="text-3xl font-bold text-center mt-8 text-white">Top-Selling</h1>
          <Carousel items={topManga} />
        </div>
      </section>

      <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
        <div>
          <h1 className="text-3xl font-bold text-center mt-8 text-white">Upcoming</h1>
          <Carousel items={topMagazines} />
        </div>
      </section>
    </div>
  );
}
