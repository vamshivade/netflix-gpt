import "./MainContainerTwo.css";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MainContainerTwo = () => {
  const { trendingMovies, nowPlayingMovies } = useSelector(
    (store) => store.movies,
  );
  const nowPlayingResults = nowPlayingMovies?.results ?? [];
  const trendingResults = trendingMovies?.results ?? [];

  if (!trendingResults.length && !nowPlayingResults.length) return null;
  return (
    <div className="movie-container-two">
      <section className="">
        <h1>Now Playing Movies</h1>
        <div className="movie-cards">
          {nowPlayingResults.map((movie) => (
            <MovieCard key={movie?.id} movieResult={movie} />
          ))}
        </div>
      </section>
      <section className="">
        <h1>Trending Movies</h1>
        <div className="movie-cards">
          {trendingResults.map((movie) => (
            <MovieCard key={movie?.id} movieResult={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContainerTwo;
