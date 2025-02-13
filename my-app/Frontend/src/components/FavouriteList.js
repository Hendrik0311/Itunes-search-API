import React from "react";
import "../App.css";

function FavoriteList({ favorites, removeFromFavorites }) {
  return (
    <div className="favorite-list">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((item, index) => (
          <li key={index}>
            <img src={item.artworkUrl100} alt={item.trackName} />
            <div>
              <h3>{item.trackName}</h3>
              <p>Artist: {item.artistName}</p>
              <p>Release Date: {item.releaseDate}</p>
              <button onClick={() => removeFromFavorites(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteList;
