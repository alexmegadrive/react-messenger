import React, {useEffect, useState} from 'react';
import "./EmptyChat.css"
import helloImage from "../../../icon/hello.png"


const EmptyChat = ({props}) => {

    return    (
        <div className="empty_chat_container">
            <div className="empty_chat_block" > </div>
            <div className="empty_chat_typing_container">
                <p className="typewriter">{props}</p>
            </div>
        </div>
    )
}

export default EmptyChat;
