import React from "react";

import './Header.css';
import { Link } from "react-router-dom";

const Header = ({
    setLoggedIn
}) => {
    return (
        <header className="header">
            <div className="header__wrapper">

                <div className="header__left-content-wrapper">

                    <div className="header__user">
                        <div className="header__avatar-icon" />
                        <p className="header__user-name">Username</p>
                    </div>

                    <div className="header__link-wrapper">
                        <div className="header__icon-settings"/>
                        <Link to="sss" className="header__link">Настройки</Link>
                    </div>

                </div>

                <button className="header__button-exit" onClick={() => setLoggedIn(false)}>
                    <p className="header__button-exit-text">Выйти</p>
                    <div className="header__button-exit-icon" />
                </button>

            </div>
        </header>
    )
}

export default Header;