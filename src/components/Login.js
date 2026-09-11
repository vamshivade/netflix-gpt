import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrandMark, ArrowIcon } from "../utils/uiComponents";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const defaultFormData = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <main className="login-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <section className="showcase-panel" aria-label="NetflixGPT introduction">
        <header className="brand">
          <BrandMark />
          <span className="brand-name">
            netflix<span>gpt</span>
          </span>
        </header>

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

      <section className="form-panel" aria-label="Sign in">
        <div className="login-card">
          <div className="card-heading">
            <p className="card-kicker">Welcome back</p>
            <h2>Sign in to your account</h2>
            <p className="card-subtitle">Pick up right where you left off.</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
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

            <button
              className="submit-button"
              type="button"
              onClick={() => navigate("/dashboard")}
            >
              Sign in
              <ArrowIcon />
            </button>
          </form>

          <p className="signup-prompt">
            New to NetflixGPT?{" "}
            <a href="#create-account">
              Create an account <span>↗</span>
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
