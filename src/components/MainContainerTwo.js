import "./MainContainerTwo.css";
import { useSelector } from "react-redux";

const MainContainerTwo = () => {
  const movies = useSelector((store) => store.movies.movies?.results ?? []);

  return (
    <section
      className="movie-rail"
      id="trending"
      aria-labelledby="trending-title"
    >
      <div className="movie-rail-heading">
        <div>
          <p className="movie-rail-kicker">Fresh picks</p>
          <h2 id="trending-title">Trending now</h2>
        </div>
        <span className="movie-rail-count">{movies.length} titles</span>
      </div>

      <div className="movie-rail-list">
        {movies.slice(0, 12).map((movie, index) => (
          <article className="movie-card" key={movie.id}>
            <div className="movie-card-image-wrap">
              {movie.poster_path ? (
                <img
                  alt={movie.title}
                  className="movie-card-image"
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              ) : (
                <div className="movie-card-fallback">No poster</div>
              )}
              <span className="movie-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.slice(0, 4) || "Coming soon"}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MainContainerTwo;
