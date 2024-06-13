import React from 'react';

export default function Pagination({ totalPosts, cardPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / cardPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='pagination pt-5'>
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? 'active block size-8 rounded border border-gray-100 bg-blue-500 text-center leading-8 text-white' : 'block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900'}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <a
            href="#"
            onClick={() => setCurrentPage(currentPage < pages.length ? currentPage + 1 : currentPage)}
            className="inline-flex size-8  items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </div>
  );
}
