import "./Dashboard.css";
import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";
import { useSelector } from "react-redux";
import RouteLoading from "./RouteLoading";
import MainContainerOne from "./MainContainerOne";
import MainContainerTwo from "./MainContainerTwo";

const Dashboard = () => {
  useFetchMovies();

  const { movies, isLoading, error } = useSelector((store) => store.movies);

  if (isLoading && !movies) return <RouteLoading />;

  if (error && !movies) {
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
      <main className="">
        <div id="home">
          <MainContainerOne />
        </div>

        <MainContainerTwo />
      </main>
    </div>
  );
};

export default Dashboard;
