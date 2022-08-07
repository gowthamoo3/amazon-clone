import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        alert(e.message);
      });
  };

  const register = (event) => {
    event.preventDefault();
    setLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        alert(e.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="submit"
            onClick={login}
            className="subtotal__checkoutButton"
          >
            Sign in{" "}
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of Use & Sale. Please
          use our Privacy Notice, our Cookie Notice and our Internet-based Ads
          Notice
        </p>
        <button
          type="submit"
          className="subtotal__checkoutButton"
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
      <div className="login__loader">
        {isLoading && (
          <CircularProgress
            color="inherit"
            disableShrink
            sx={{ width: "20px" }}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
