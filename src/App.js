import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
