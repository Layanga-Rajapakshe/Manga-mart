import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // After submission, redirect to search page
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <form className="max-w-md" onSubmit={handleSubmit}>   
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input 
          type="search" 
          className="block w-full sm:w-36 p-4 pl-10 text-sm placeholder:text-gray-300 text-gray-300 focus:text-white border-2 border-gray-300 rounded-full bg-transparent focus:border-white" 
          placeholder="Search..." 
          required 
          onChange={handleChange}
          value={searchQuery}
        />
      </div>
    </form>
  );
};

export default SearchBar;
