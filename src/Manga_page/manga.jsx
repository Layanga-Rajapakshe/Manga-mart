import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Mangacard from './mangacard';

export default function Manga() {
  const { id } = useParams();
  const [manga, setManga] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getManga = async (query) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga/${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setManga(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching manga:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getManga(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 text-black">{manga.title}</h1>
      <div className="px-12 py-6">
        <Mangacard manga={manga} />
      </div>
    </div>
  );
}
