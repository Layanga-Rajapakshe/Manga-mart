import React from 'react'
import { useState, useEffect } from 'react';
import Card from './card';
import Carousel from '../Landing_page/carousal';

export default function Homepage() {
  const [topManga, SetTopManga] = useState([]);
  const [items2, SetTopMagazines] = useState([]);
    
  
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
    GetTopManga();
  }, []);
  useEffect(() => {
    GetTopMagazines();
  }, []);

  return (
    <div>
      <section class="py-12 bg-white sm:py-16 lg:py-20">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-md mx-auto text-center">
            <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured Manga</h2>
            <p class="mt-4 text-base font-normal leading-7 text-gray-600">Discover the hottest bestsellers at our Top-Selling Manga page, where you'll find the most popular and must-read titles that everyone is talking about</p>
        </div>

        <div class="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
        {topManga.map(manga => (
					<Card key={manga.id} topManga={manga}/>
				))}
        </div>
        <section className="relative py-12 bg-white sm:py-16 lg:py-20">
          <div>
            <h1 className="text-3xl font-bold text-center mt-8 text-black">Upcoming</h1>
            <Carousel items={items2} />
          </div>
        </section>
    </div>
</section>

    </div>
  )
}
