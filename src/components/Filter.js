import React from 'react';

function Filter({ setSearch, setRating }) {
  return (
    <div className="filter">
      <label htmlFor="search">Rechercher par titre :</label>
      <input
        type="text"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <label htmlFor="rating">Classement minimum :</label>
      <input
        type="number"
        id="rating"
        min="0"
        max="10"
        onChange={(e) => setRating(e.target.value)}
      />
    </div>
  );
}

export default Filter;
