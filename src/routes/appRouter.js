import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import PageNotFound from "../components/common/PageNotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";
import RouteLoading from "../components/common/RouteLoading";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));

function WithSuspense({ Component }) {
  return (
    <Suspense fallback={<RouteLoading />}>
      <Component />
    </Suspense>
  );
}

const appRouter = createBrowserRouter([
  // Public Routes
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  // Protected Routes
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <WithSuspense Component={Dashboard} />,
      },
    ],
  },

  // 404 - Page Not Found
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default appRouter;
