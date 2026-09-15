import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import RouteLoading from "../components/common/RouteLoading";

const ProtectedRoutes = () => {
  const { user, isLoading } = useSelector((store) => store.user);

  if (isLoading) {
    return <RouteLoading />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
