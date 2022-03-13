import React, {useState} from 'react';
import './AddChatStyle.css';
import {useDispatch, useSelector} from "react-redux";
import {addNewRoom} from "../../../redux/slices/messagesChat1Slice";


const AddChat = ({onSelectedChat, selectedChat, setSelectedChat}) => {

    const [newChat, setNewChat] = useState('');
    const dispatch = useDispatch();
    const chat_message = useSelector(state => state.messages);


    const handleAddNewChat = (event) => {
        event.preventDefault();
        console.log("создан чат " + newChat)
        const checkChatName = chat_message.find(item => item.room_name === newChat);
        if (!checkChatName) {
            if (newChat.length > 0)
            {
                dispatch(addNewRoom({room_name:newChat}))
                console.log(chat_message)
                onSelectedChat({room_name: newChat, history: [], selected: true})
            }
            else  return;

        }
        else return (alert("Выберите другое название"))
        setNewChat("")
    }

    const handleChangeInput = (event) => {
       setNewChat(event.target.value)
    }

    return (
        <div >
            <form className="addChat_form">
                <input
                    placeholder="Введите название"
                    value={newChat}
                    onChange={handleChangeInput}
                    className="addChat_input"
                />
                <button className="addChat__button" onClick={handleAddNewChat}>
                    <p className="send__button-text">Добавить Чат</p>
                </button>
            </form>
            </div>
    );
};

export default AddChat;