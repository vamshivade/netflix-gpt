import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>The page you're looking for doesn't exist.</p>

      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default PageNotFound;
