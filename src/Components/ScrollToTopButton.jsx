import React from 'react';
import { Link } from 'react-router-dom';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to top
    });
  };

  return (
    <Link
      className="inline-block rounded-full bg-blue-900 p-2 text-white shadow transition hover:bg-blue-700 sm:p-3 lg:p-4"
      to="#"
      onClick={scrollToTop}
    >
      <span className="sr-only">Back to top</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

export default ScrollToTopButton;
