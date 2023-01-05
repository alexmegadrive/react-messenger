import React, { useContext } from "react";

import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ setLoggedIn, variation, signOut }) => {
  const users = useSelector((state) => state.users);
  const logged_user = useSelector((state) => state.user);

  switch (variation) {
    case "settings":
      return (
        <header className="header">
          <div className="header__wrapper">
            <div className="header__left-content-wrapper">
              <div className="header__user">
                <img
                  className="header__avatar-icon"
                  src={logged_user.userpic}
                />
                <p className="header__user-name">{logged_user.name}</p>
              </div>

              <div className="header__link-wrapper">
                <div className="header__icon-settings_home" />
                <Link to="./" className="header__link">
                  Main
                </Link>
              </div>
            </div>

            <button className="header__button-exit" onClick={signOut}>
              <p className="header__button-exit-text">Log out</p>
              <div className="header__button-exit-icon" />
            </button>
          </div>
        </header>
      );
    case "main":
      return (
        <header className="header">
          <div className="header__wrapper">
            <div className="header__left-content-wrapper">
              <div className="header__user">
                <img
                  className="header__avatar-icon"
                  src={logged_user.userpic}
                />
                <p className="header__user-name">{logged_user.name}</p>
              </div>

              <div className="header__link-wrapper">
                <div className="header__icon-settings_gear" />
                <Link to="./settings" className="header__link">
                  Settings
                </Link>
              </div>
            </div>

            <button className="header__button-exit" onClick={signOut}>
              <p className="header__button-exit-text">Log out</p>
              <div className="header__button-exit-icon" />
            </button>
          </div>
        </header>
      );
    default:
      return;
  }
};

export default Header;
