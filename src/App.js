import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]); // Liste des films
  const [search, setSearch] = useState(''); // Recherche par titre
  const [rating, setRating] = useState(0); // Filtre par classement

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      movie.rating >= rating
  );

  return (
    <div className="App">
      <Filter setSearch={setSearch} setRating={setRating} />
      <MovieList movies={filteredMovies} />
      {/* Ajouter ici le composant ou la fonction pour ajouter un nouveau film */}
    </div>
  );
}

export default App;
