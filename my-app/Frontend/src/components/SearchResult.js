import React from "react";
import "../App.css";

function SearchResult({ searchResults, addToFavorites }) {
  return (
    <div className="search-result">
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>
            <img src={item.artworkUrl100} alt={item.trackName} />
            <div>
              <h3>{item.trackName}</h3>
              <p>Artist: {item.artistName}</p>
              <p>Release Date: {item.releaseDate}</p>
              <button onClick={() => addToFavorites(item)}>
                Add to Favorites
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
