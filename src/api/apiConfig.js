const apiConfig = {
  BASE_URL: process.env.REACT_APP_TMDB_URL,

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
  },
};

export default apiConfig;
