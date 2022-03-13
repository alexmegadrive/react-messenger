import React from 'react';

import './Search.css';

const Search = () => {
    return (
        <section className="search">
            <form className="search__form">
                <input
                    className="search__input"
                    placeholder="Поиск Чата"
                />
                <button className="search__button">
                    <div className="search__button-icon" />
                    <p className="search__button-text">Выйти</p>
                </button>
            </form>
        </section>
    );
};

export default Search;