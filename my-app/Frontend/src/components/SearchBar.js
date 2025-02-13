import React, { useState } from "react";
import { searchITunes } from "../services/api"; // Import the searchITunes function from api.js

function SearchBar({ setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaType, setMediaType] = useState("all");

  const handleSearch = async () => {
    try {
      const results = await searchITunes(searchTerm, mediaType); // Call the search Itunes function with search term and media type
      setSearchResults(results); // Update search results state with the fetched data
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Handle error
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
