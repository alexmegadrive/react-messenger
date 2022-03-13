import React, {useState, useRef, useEffect} from "react";
import ChatRoomMessage from "./ChatRoomMessage";
import styles from './ChatMainStyles.css';
import Send from "../common/Send/Send";
import EmptyChat from "../common/EmptyChat/EmptyChat";

const ChatRoom = ({

     selectedChat, setSelectedChat,
}) => {


    const divRef = useRef(null);


    useEffect(() =>
    {  divRef != null ?
        divRef.current.scrollIntoView({ behavior: "smooth" })
    :
    console.log('scroll failed')
    }

    );

    return (
        <>
            <main className="main">
                <div className="main__content">
                    { selectedChat && selectedChat.history.length > 0 ?
                        <div>
                            { selectedChat && selectedChat.history.map((item, index) => {
                                return (
                                    <div  className="test" key={index}>
                                        <ChatRoomMessage item={item}/>
                                    </div>
                                )
                            })
                            }
                            <div ref={divRef} />
                        </div>
                        :
                        <>
                            <EmptyChat props={"Отправьте первое сообщение"}/>
                            <div ref={divRef} />
                        </>
                    }

                </div>

                <Send selectedChat={selectedChat}
                      setSelectedChat={setSelectedChat}/>
            </main>
        </>
    )
}

export default ChatRoom;