import React, { useState, useEffect } from 'react';
import BackgroundVideo from './background_video';
import Carousel from '../Landing_page/carousal';
import video1 from '../assets/bg_video1.mp4';
import video2 from '../assets/bg_video2.mp4';
import video3 from '../assets/bg_video3.mp4';
import video4 from '../assets/bg_video4.mp4';
import video5 from '../assets/bg_video5.mp4';
import video6 from '../assets/bg_video6.mp4';
import video7 from '../assets/bg_video7.mp4';
import video8 from '../assets/bg_video8.mp4';

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
        video1,
        video2,
        video3,
        video4,
        video5,
        video6,
        video7,
        video8
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
