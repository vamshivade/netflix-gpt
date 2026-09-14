import apiHandler from "./apiHandler";
import endpoints from "./endpoints";

const getTrendingMovies = (params, signal) => {
  return apiHandler("GET", endpoints.GET_TRENDING_MOVIES, null, params, signal);
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

export { getTrendingMovies, getTrendingMovie };
