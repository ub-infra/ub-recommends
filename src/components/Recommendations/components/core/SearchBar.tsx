import React, { useState } from "react";
import './SearchBar.css'

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className="search-container">
      <div className="wrap">
        <input
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="btn"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
