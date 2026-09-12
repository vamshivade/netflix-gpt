import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieVideo } from "../redux/moviesSlice";

const useFetchMovieVideo = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const controller = new AbortController();

    const fetchMovieVideo = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
          { ...OPTIONS, signal: controller.signal },
        );

        if (!response.ok) throw new Error("Failed to fetch movie video");

        const data = await response.json();
        const video = data.results?.find(
          (item) => item.site === "YouTube" && item.type === "Trailer",
        );

        dispatch(addMovieVideo(video ?? data.results?.[0] ?? null));
      } catch (error) {
        if (error.name !== "AbortError") dispatch(addMovieVideo(null));
      }
    };

    fetchMovieVideo();

    return () => controller.abort();
  }, [dispatch, movieId]);
};

export default useFetchMovieVideo;
