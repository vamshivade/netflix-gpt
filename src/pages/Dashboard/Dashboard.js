import "./Dashboard.css";
import Header from "../../components/header/Header";
import useFetchMovies from "../../hooks/useFetchMovies";
import { useSelector } from "react-redux";
import RouteLoading from "../../components/common/RouteLoading";
import MainContainerOne from "../../components/movie/MainContainerOne";
import MainContainerTwo from "../../components/movie/MainContainerTwo";
import SearchGPT from "../SearchGPT/SearchGPT";

const Dashboard = () => {
  useFetchMovies();

  const { trendingMovies, isLoading, error } = useSelector(
    (store) => store.movies,
  );

  const isSearchGpt = useSelector((store) => store.searchGpt.isSearchGpt);

  if (isLoading && !trendingMovies) return <RouteLoading />;

  if (error && !trendingMovies) {
    return (
      <main className="dashboard-error">
        <p className="dashboard-error-kicker">Something went wrong</p>
        <h1>We could not find your next watch.</h1>
        <p>{error}</p>
        <button type="button" onClick={() => window.location.reload()}>
          Try again
        </button>
      </main>
    );
  }

  return (
    <div className="dashboard-page">
      <Header />
      {isSearchGpt ? (
        <SearchGPT />
      ) : (
        <main className="">
          <div id="home">
            <MainContainerOne />
          </div>
          <div id="home-2">
            <MainContainerTwo />
          </div>
        </main>
      )}
    </div>
  );
};

export default Dashboard;
