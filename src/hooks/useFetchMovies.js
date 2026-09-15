import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addMovies,
  addNowPlayingMovies,
  addTopRatedMovies,
  setMoviesError,
  setMoviesLoading,
} from "../redux/moviesSlice";
import {
  getNowPlayingMovie,
  getTopRatedMovies,
  getTrendingMovies,
} from "../api/moviesApi";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(setMoviesLoading());

    const fetchMovies = async () => {
      try {
        const [trendingMovies, nowPlayingMovies, topRatedMovies] =
          await Promise.all([
            getTrendingMovies(controller.signal),
            getNowPlayingMovie(controller.signal),
            getTopRatedMovies(controller.signal),
          ]);

        if (!Array.isArray(trendingMovies.results)) {
          throw new Error("Movie data is unavailable");
        }

        if (!Array.isArray(nowPlayingMovies.results)) {
          throw new Error("Now playing movie data is unavailable");
        }

        dispatch(addMovies(trendingMovies));
        dispatch(addNowPlayingMovies(nowPlayingMovies));
        dispatch(addTopRatedMovies(topRatedMovies));
      } catch (error) {
        if (error.name !== "AbortError") {
          dispatch(
            setMoviesError("We could not load movies right now. Please retry."),
          );
        }
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, [dispatch]);
};

export default useFetchMovies;
