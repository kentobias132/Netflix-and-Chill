import React, { useEffect, useState } from "react";

function InputComponent() {
  const [movies, setMovies] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    getMoviesArray(searchWord);
  }, [searchWord]);

  const getMoviesArray = async (keyWord) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=283158bd06dd1684146f37464c01d6d7&query=${keyWord}`
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies..."
        onChange={handleChange}
      />
      {movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchWord.toLowerCase())
        )
        .map((filterMovie) => (
          <h3 key={filterMovie.id}> {filterMovie.title} </h3>
        ))}
    </div>
  );
}

export default InputComponent;
