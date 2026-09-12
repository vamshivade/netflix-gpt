import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Brand, ArrowIcon } from "../utils/uiComponents";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const defaultFormData = {
  name: "",
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(defaultFormData);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (isSignUp && !formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    const authRequest = isSignUp
      ? createUserWithEmailAndPassword(auth, formData.email, formData.password)
      : signInWithEmailAndPassword(auth, formData.email, formData.password);

    authRequest
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (isSignUp) {
          await updateProfile(user, {
            displayName: formData.name.trim(),
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocLKMuApPlM7zk3aD8qgr5UtXJ-jK7K6a_fECsJbLsEhImZAdmWX=s96-c",
          });

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
        }

        if (isSignUp) {
          toast.success("Account Created Successfully");
        } else {
          toast.success("Login Successfull");
        }
        navigate("/dashboard");
        setFormData(defaultFormData);
      })
      .catch((error) => {
        const errorCode = error.code;

        let message = "Something went wrong. Please try again.";

        switch (errorCode) {
          case "auth/email-already-in-use":
            message =
              "This email is already registered. Please sign in instead.";
            break;

          case "auth/invalid-email":
            message = "Please enter a valid email address.";
            break;

          case "auth/weak-password":
            message = "Password should be at least 6 characters.";
            break;

          case "auth/invalid-credential":
            message = "Incorrect email or password.";
            break;

          default:
            message = "Unable to complete your request. Please try again.";
        }
        // ..
        toast.error(message);
      });
  };

  return (
    <main className="login-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <section className="showcase-panel" aria-label="NetflixGPT introduction">
        <Brand wrapperClassName="brand" nameClassName="brand-name" />

        <div className="showcase-copy">
          <p className="eyebrow">Your next story starts here</p>
          <h1>
            Find something
            <br />
            <em>great</em> to watch.
          </h1>
          <p className="showcase-description">
            Tell us what you&apos;re in the mood for. NetflixGPT turns your
            ideas into your next favorite watch.
          </p>
          <div className="recommendation-note">
            <span className="note-line" />
            <span>Curated for curious minds</span>
          </div>
        </div>

        <div className="showcase-footer">
          <span>STREAM SMARTER</span>
          <span className="footer-dot" />
          <span>WATCH BETTER</span>
        </div>
      </section>

      <section
        className="form-panel"
        aria-label={isSignUp ? "Create an account" : "Sign in"}
      >
        <div className="login-card">
          <div className="card-heading">
            <p className="card-kicker">
              {isSignUp ? "Start your journey" : "Welcome back"}
            </p>
            <h2>
              {isSignUp ? "Create your account" : "Sign in to your account"}
            </h2>
            <p className="card-subtitle">
              {isSignUp
                ? "Get personalized recommendations for your next watch."
                : "Pick up right where you left off."}
            </p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            {isSignUp && (
              <>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                />
              </>
            )}

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />

            <div className="password-label">
              <label htmlFor="password">Password</label>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            <button className="submit-button" type="submit">
              {isSignUp ? "Sign Up" : "Sign in"}
              <ArrowIcon />
            </button>
          </form>

          <p className="signup-prompt">
            {isSignUp ? "Already have an account?" : "New to NetflixGPT?"}{" "}
            <a
              href={isSignUp ? "#sign-in" : "#create-account"}
              onClick={(event) => {
                event.preventDefault();
                setIsSignUp((currentValue) => !currentValue);
              }}
            >
              {isSignUp ? "Sign in" : "Create an account"} <span>↗</span>
            </a>
          </p>
        </div>
        <p className="legal-copy">
          By continuing, you agree to our <a href="#terms">Terms</a> and{" "}
          <a href="#privacy">Privacy Policy</a>.
        </p>
      </section>
    </main>
  );
}

export default Login;
