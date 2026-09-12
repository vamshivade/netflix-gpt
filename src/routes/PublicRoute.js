import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import RouteLoading from "../components/RouteLoading";

const PublicRoute = () => {
  const { user, isLoading } = useSelector((store) => store.user);

  if (isLoading) {
    return <RouteLoading />;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />;
};

export default PublicRoute;
