import React, { useEffect, useState } from "react";

function PopularMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMoviesArray();
  }, []);

  const getPopularMoviesArray = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=283158bd06dd1684146f37464c01d6d7`
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3> {movie.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt="movie poster"
          />
        </div>
      ))}
    </div>
  );
}

export default PopularMovie;
