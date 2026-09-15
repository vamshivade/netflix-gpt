import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingMovies: null,
  nowPlayingMovies: null,
  topRatedMovies: null,
  movieVideo: null,
  isLoading: true,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    addMovies: (state, action) => {
      state.trendingMovies = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setMoviesLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setMoviesError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addMovieVideo: (state, action) => {
      state.movieVideo = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const {
  addMovies,
  addMovieVideo,
  setMoviesLoading,
  setMoviesError,
  addNowPlayingMovies,
  addTopRatedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
