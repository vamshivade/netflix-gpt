import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import PageNotFound from "../components/PageNotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";
import RouteLoading from "../components/RouteLoading";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("../components/Dashboard"));

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
        element: (
          <Suspense fallback={<RouteLoading />}>
            <Dashboard />
          </Suspense>
        ),
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
