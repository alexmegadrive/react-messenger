import React from "react";

import './SearchChats.css';
import Header from "../common/Header/Header";
import Search from "../common/Search/Search";
import ChatList from "./ChatList/ChatList";

const SearchChats = ({
    setLoggedIn,
}) => {
    return (
        <>
            <Header setLoggedIn={setLoggedIn} />
            <main className="main">
                <div className="main__content">
                    <Search />
                    <ChatList />
                </div>
            </main>

        </>
    )
}

export default SearchChats;