import apiHandler from "./apiHandler";
import endpoints from "./endpoints";

const getTrendingMovies = (signal) => {
  return apiHandler("GET", endpoints.GET_TRENDING_MOVIES, null, null, signal);
};

const getTrendingMovie = (id, signal) => {
  return apiHandler(
    "GET",
    endpoints.GET_TRENDING_MOVIE(id),
    null,
    null,
    signal,
  );
};

const getNowPlayingMovie = (signal) => {
  return apiHandler("GET", endpoints.GET_NOW_PLAYING_MOVIE, null, null, signal);
};

export { getTrendingMovies, getTrendingMovie, getNowPlayingMovie };
