import React from 'react'
import { useState, useEffect } from 'react'
import Mangacard from './mangacard'

export default function Manga({mangaId}) {
  const [manga, SetManga] = useState();

	const GetManga = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v4/manga/${query}/full`)
			.then(res => res.json());

		SetManga(temp.data);
	}

  useEffect(() => {
		GetManga();
	}, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 text-black">{manga.title}</h1>
      <div className="px-12 py-6">
        <Mangacard manga={manga}/>
      </div>
    </div>
  )
}
