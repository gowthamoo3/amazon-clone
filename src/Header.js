import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { StateContext } from "./StateProvider";
import { getAuth } from "firebase/auth";

function Header() {
  const [{ basket, user }, dispatch] = useContext(StateContext);

  const getUserName = (userEmail) => {
    let userName = userEmail?.split("@")[0].split(".")[0]; // Get user name from email
    return userName.charAt(0).toUpperCase() + userName.slice(1); // Capitalize user name
  };

  const signOut = () => {
    const auth = getAuth();
    auth.signOut();
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={signOut} className="header__option">
            <span className="header__optionOne">
              {user ? "Hello, " + getUserName(user?.email) : "Hello there"}
            </span>
            <span className="header__optionTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Return</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Your</span>
            <span className="header__optionTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__basketContainer">
            <span className="header__sprite"></span>
            <span className="header__basketCount">{basket?.length}</span>
            <span className="header__basketText header__optionTwo">Cart</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
