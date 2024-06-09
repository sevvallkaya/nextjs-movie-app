const API_URL = "https://api.themoviedb.org/3";

const fetchMovieApi = async (pathname, query = "") => {
  try {
    const res = await fetch(
      `${API_URL}${pathname}?api_key=${process.env.API_KEY}&page=1&${query}`
    );
    return res.json();
  } catch (e) {
    throw new Error(error);
  }
};

const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list", "&page=1");
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};

const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated", "");
};

const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular", "");
};

const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`, "");
};

export {
  fetchMovieApi,
  getCategories,
  getSingleCategory,
  getTopRatedMovies,
  getPopularMovies,
  getMovie,
};
