import React from 'react';

import './ChatList.css';
import ChatItem from "./ChatItem/ChatItem";

const ChatList = () => {
    return (
        <section className="chat-list">
            <ul className="chat-list__list">
                <ChatItem />
                <ChatItem />
            </ul>
        </section>
    );
};

export default ChatList;