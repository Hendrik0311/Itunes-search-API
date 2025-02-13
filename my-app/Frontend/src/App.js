import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import FavoriteList from "./components/FavouriteList";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (itemToRemove) => {
    const updatedFavorites = favorites.filter((item) => item !== itemToRemove);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="App">
      <h1>iTunes Search</h1>
      <SearchBar setSearchResults={setSearchResults} />
      <div className="content">
        <SearchResult
          searchResults={searchResults}
          addToFavorites={addToFavorites}
        />
        <FavoriteList
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
    </div>
  );
}

export default App;
