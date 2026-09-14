import "./MainContainerOne.css";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import useFetchMovieVideo from "../hooks/useFetchMovieVideo";
import VideoTrailer from "./VideoTrailer";

const MainContainerOne = () => {

  const movies = useSelector((store) => store.movies.movies);

  const movieResults = movies?.results;

  const randomMovie = useMemo(() => {
    if (!movieResults?.length) return null;

    // 1. Check sessionStorage
    const storedMovieId = sessionStorage.getItem("featuredMovieId");

    // 2. If ID exists, find that movie
    if (storedMovieId) {
      const storedMovie = movieResults.find(
        (movie) => movie.id === Number(storedMovieId),
      );

      if (storedMovie) {

        return storedMovie;
      }
    }

    // 3. No stored movie → select random movie
    const randomIndex = Math.floor(Math.random() * movieResults.length);

    const newMovie = movieResults[randomIndex];

    // 4. Store movie ID
    sessionStorage.setItem("featuredMovieId", String(newMovie.id));


    return newMovie;
  }, [movieResults]);

  // Fetch trailer
  useFetchMovieVideo(randomMovie?.id);

  if (!randomMovie) return null;

  const { title, overview } = randomMovie;

  return (
    <div className="MainContainerOne">
      <VideoTitle title={title} overview={overview} />

      <VideoTrailer />
    </div>
  );
};

export default MainContainerOne;
