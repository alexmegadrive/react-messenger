import React, {useEffect, useState} from "react";
import ChatMainList from "./ChatMainList";
import ChatRoom from "./ChatRoom";
import styles from './ChatMainStyles.css';
import Header from "../common/Header/Header";
import AddChat from "../common/AddChat/AddChat";
import {useDispatch, useSelector} from "react-redux";
import { addNewMessage, addNewUser } from "../../redux/slices/messagesChat1Slice"


const ChatMainContainer = ({
                               setLoggedIn,
                               signOut
                           }) =>

{

const dispatch = useDispatch();
const [selectedChat, setSelectedChat ] = useState(null);
const chat_messages = useSelector(state => state.messages);


//перебор массива чатов, поиск активного, и передача его в компонент отображения (для работоспособности после перезагрузки страницы)
useEffect(()=> {
    const funcGetActiveChat = chat_messages.find((item)=> {
        return  item.selected === true
    })
    if (!!funcGetActiveChat) {setSelectedChat(funcGetActiveChat)    }
}, [])


return (
    <div className="main_container">
        <Header variation="main" setLoggedIn={setLoggedIn} signOut={signOut}/>

        <div className="chat__window_container_main">
            <div  className="chat__container_list">
                <ChatMainList onSelectedChat={setSelectedChat}/>
                <AddChat
                         onSelectedChat={setSelectedChat}  //передача в правое окно нового чата для отображения
                        // selectedChat={selectedChat}
                      //setSelectedChat={setSelectedChat}

                />
            </div>

            <ChatRoom   className="chat__container_room"
                        selectedChat={selectedChat}
                        setSelectedChat={setSelectedChat}
                        //onSelectedChat={setSelectedChat}

            />
        </div>

        </div>
)
}

export default ChatMainContainer;
