import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import {
  addMovies,
  setMoviesError,
  setMoviesLoading,
} from "../redux/moviesSlice";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(setMoviesLoading());

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day",
          { ...OPTIONS, signal: controller.signal },
        );

        if (!response.ok) throw new Error("Unable to load movies");

        const data = await response.json();

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
