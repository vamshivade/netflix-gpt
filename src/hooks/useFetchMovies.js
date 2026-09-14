import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addMovies,
  setMoviesError,
  setMoviesLoading,
} from "../redux/moviesSlice";
import { getTrendingMovies } from "../api/moviesApi";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(setMoviesLoading());

    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies(undefined, controller.signal);

        if (!Array.isArray(data.results)) {
          throw new Error("Movie data is unavailable");
        }

        dispatch(addMovies(data));
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
