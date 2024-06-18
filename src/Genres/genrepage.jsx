import React, { useState, useEffect } from 'react';
import Card from '../Home_page/card';
import { useParams } from 'react-router-dom';
import Pagination from '../Home_page/pagination';

export default function GenrePage() {
  const { genre, name } = useParams();
  const [manga, setManga] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(25);

  const fetchManga = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga?genres=${genre}&page=${currentPage}`);
      const data = await response.json();
      setManga(data.data);
      setPagination(data.pagination);
      setCardPerPage(data.pagination.items.per_page);
    } catch (error) {
      console.error('Failed to fetch manga:', error);
    }
  };

  useEffect(() => {
    fetchManga();
  }, [genre, currentPage]);

  return (
    <div>
      <section className='pt-12'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">{name} Manga</h2>

            {pagination.items && (
              <p className="mt-4 max-w-md text-gray-500">
                {pagination.items.total} results found for {name} Manga 
              </p>
            )}
          </header>

          <div className="mt-8">
            {pagination.current_page && pagination.last_visible_page && (
              <p className="text-sm text-gray-500">Showing Page <span>{pagination.current_page}</span> of {pagination.last_visible_page}</p>
            )}
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {manga.map(manga => (
              <Card key={manga.mal_id} topManga={manga} />
            ))}
          </ul>

          {/* Add pagination controls */}
          <div className="mt-8 flex justify-center">
          <Pagination totalPosts={pagination.total} cardPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
          </div>

        </div>
      </section>
    </div>
  );
}
