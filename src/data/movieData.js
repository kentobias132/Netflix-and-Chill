// Api key
const tmdbKey = "283158bd06dd1684146f37464c01d6d7";
// base url
const tmdbBaseUrl = "https://api.themoviedb.org/3";

export const getMovieBySearchKeyword = (searchKeyword) => {
  const movieKeywordEndpoint = "/search/movie";
  const reqestParams = `?api_key=${tmdbKey}&query=${searchKeyword}`;
  const urlToFetch = `${tmdbBaseUrl}${movieKeywordEndpoint}${reqestParams}`;

  return urlToFetch;
  //   try {
  //     const response = await fetch(urlToFetch);
  //     if (response.ok) {
  //       const jsonResponse = await response.json();
  //       const movie = jsonResponse.results;
  //       //   console.log(movie);
  //       return movie;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
};
