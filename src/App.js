import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import appRouter from "./routes/appRouter";

import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./redux/userSlice";
import { onAuthStateChanged } from "firebase/auth";

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
