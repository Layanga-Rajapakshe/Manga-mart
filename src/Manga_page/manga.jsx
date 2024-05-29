import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Mangacard from './mangacard'

export default function Manga() {
  const {id} = useParams();

  const [manga, SetManga] = useState({});

	const GetManga = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v4/manga/${query}`)
			.then(res => res.json());

		SetManga(temp.data);
	}

  useEffect(() => {
		GetManga(id);
	}, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 text-black">{manga.title}</h1>
      <div className="px-12 py-6">
        <Mangacard Manga={manga}/>
      </div>
    </div>
  )
}
