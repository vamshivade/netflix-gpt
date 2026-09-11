import { useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./redux/userSlice";
import { onAuthStateChanged } from "firebase/auth";

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
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,

            email: user.email,
            emailVerified: user.emailVerified,

            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
          }),
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => unSubscribe();
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
