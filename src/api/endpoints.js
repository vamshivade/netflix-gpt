const endpoints = {
  GET_TRENDING_MOVIES: "/3/trending/movie/day",
  GET_TRENDING_MOVIE: (id) => `/3/movie/${id}/videos`,
  GET_NOW_PLAYING_MOVIE: "/3/movie/now_playing",
};

export default endpoints;
