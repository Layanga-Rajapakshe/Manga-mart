import React, { useState, useEffect } from 'react';
import Card from '../Home_page/card';
import { useParams } from 'react-router-dom';
import Pagination from '../Home_page/pagination';

const Search = () => {
  const { query } = useParams();
  const [manga, setManga] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(25);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchManga = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga?q=${query}&page=${currentPage}&sfw`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setManga(data.data);
      setPagination(data.pagination);
      setCardPerPage(data.pagination.items.per_page);
      setError(null);
    } catch (error) {
      setError('Failed to fetch manga');
      console.error('Failed to fetch manga:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManga();
  }, [query, currentPage]);

  return (
    <div>
      <section className='pt-12'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Search Results</h2>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {pagination.items && (
              <p className="mt-4 max-w-md text-gray-500">
                {pagination.items.total} results found
              </p>
            )}
          </header>

          <div className="mt-8">
            {pagination.current_page && pagination.last_visible_page && (
              <p className="text-sm text-gray-500">Showing Page <span>{pagination.current_page}</span> of {pagination.last_visible_page}</p>
            )}
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {manga.map((mangaItem, index) => (
              <Card key={index} topManga={mangaItem} />
            ))}
          </ul>

          {/* Add pagination controls */}
          <div className="mt-8 flex justify-center">
              <Pagination
                totalPosts={pagination.items ? pagination.items.total : 0}
                cardPerPage={cardPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
