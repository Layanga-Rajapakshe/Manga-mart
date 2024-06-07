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
      <BackgroundVideo   videos={[
      'src/assets/bg_video1.mp4',
      'src/assets/bg_video2.mp4',
      'src/assets/bg_video3.mp4',
      'src/assets/bg_video4.mp4',
      'src/assets/bg_video5.mp4',
      'src/assets/bg_video6.mp4',
      'src/assets/bg_video7.mp4',
      'src/assets/bg_video8.mp4',
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
