import React, {useContext, useState} from 'react';

import './Send.css';
import {updateUserInfo} from "../../../redux/slices/usersSlice";
import {addNewMessage, addNewRoom} from "../../../redux/slices/messagesChat1Slice";
import {useDispatch, useSelector} from "react-redux";
import {ContextLoggedUser} from "../../../App";


const Send = ({selectedChat, setSelectedChat}) => {
    const [newMessage, setNewMessage] = useState('')
    const [loggedUserEmail, setLoggedUserEmail] = useContext(ContextLoggedUser);

    console.log("SEND // selected chat")
    console.log(selectedChat)

    const handleTypeMessage = (event) => {
        setNewMessage(event.target.value)
    }
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user)


    const getCurrentTime = () => {
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        const correctHours = hours >= 10 ? hours : '0' + hours;
        const correctMinutes = minutes >= 10 ? minutes : '0' + minutes;
        const currentTime = correctHours + ":" + correctMinutes;
        return currentTime
    }

    const sendMessage = (event) => {
        event.preventDefault();
        console.log('SEND // room_name')
        console.log(selectedChat.room_name)

        if (newMessage.length > 0) {
            const currentTime = getCurrentTime();
            const messageObject = {
                room_name: selectedChat.room_name,
                // name: loggedUserEmail.name,
                email: user.email,
                time: currentTime,
                message: newMessage,
            }
            dispatch(addNewMessage(
                messageObject))

            setSelectedChat(state => ({
                ...state,
                history: [
                    ...state.history, messageObject
                ]
            }))
            setNewMessage("")

        } else return


    }


    return (
        <section className="send">
            <form className="send__form">
                <input
                    className="send__input"
                    placeholder="Введите сообщение"
                    value={newMessage}
                    onChange={handleTypeMessage}

                />
                <button className="send__button"
                        onClick={sendMessage}
                >
                    <div className="send__button-icon"/>
                    <p className="send__button-text">Отправить</p>
                </button>
            </form>
        </section>
    );
};

export default Send;