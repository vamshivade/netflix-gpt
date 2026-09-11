import "./Dashboard.css";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Header />
      <main className="dashboard-content">
        <section className="dashboard-intro">
          <p className="dashboard-kicker">Your watch space</p>
          <h1>
            Find your next <em>favorite</em> story.
          </h1>
          <p className="dashboard-description">
            A thoughtful place for films, series, and recommendations worth
            pressing play on.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
