import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
  movieVideo: null,
  isLoading: true,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
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
  },
});

export const { addMovies, addMovieVideo, setMoviesLoading, setMoviesError } =
  moviesSlice.actions;

export default moviesSlice.reducer;
