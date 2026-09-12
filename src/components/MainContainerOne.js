import React from "react";
import "./MainContainerOne.css";
import VideoTitle from "./VideoTitle";
import VideoPlay from "./VideoPlay";
import { useSelector } from "react-redux";
import useFetchMovieVideo from "../hooks/useFetchMovieVideo";

const MainContainerOne = () => {
  const movies = useSelector((store) => store.movies.movies);
  const movie = movies?.results?.[0];

  useFetchMovieVideo(movie?.id);

  if (!movie) return null;

  const { overview, title } = movie;

  return (
    <div className="MainContainerOne">
      <VideoTitle title={title} overview={overview} />
      <VideoPlay />
    </div>
  );
};

export default MainContainerOne;
