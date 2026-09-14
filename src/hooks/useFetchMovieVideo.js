import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieVideo } from "../redux/moviesSlice";
import { getTrendingMovie } from "../api/moviesApi";

const useFetchMovieVideo = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addMovieVideo(null));

    if (!movieId) return;

    const controller = new AbortController();

    const fetchMovieVideo = async () => {
      try {
        const data = await getTrendingMovie(movieId, controller.signal);
        const video = data.results?.find(
          (item) =>
            item.site === "YouTube" && item.type === "Trailer" && item.key,
        );

        dispatch(addMovieVideo(video ?? null));
      } catch (error) {
        if (error.name !== "AbortError") dispatch(addMovieVideo(null));
      }
    };

    fetchMovieVideo();

    return () => controller.abort();
  }, [dispatch, movieId]);
};

export default useFetchMovieVideo;
