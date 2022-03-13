import React from 'react';
import {useSelector} from "react-redux";
import unknown_avatar from '../../icon/unknown_avatar.png'


const ChatRoomMessage = ({item}) => {
    const {message, time, email} = item;
    console.log('ITEM:');
    console.log(item);
    console.log(email);
    const users = useSelector(state => state.users);


    const funcGetName = () => {
        const messageOwner = users.findIndex((user) => user.email === email);
        if (users[messageOwner].name) {
            return users[messageOwner].name
        }
        else {
            return 'unknown_user'
        }
    }

    const funcGetUserpic = () => {
        const messageOwner = users.findIndex((user) => user.email === email);
        if (users[messageOwner].userpic != undefined) {
            return users[messageOwner].userpic
        }
        else {
            return unknown_avatar
        }
    }

    return (
        <>
            <li className="chat-list__item">
                <div className="chat-list__item__wrapper">
                    <div className="chat-list__item-user-info">
                        <img className="chat-list__user-avatar" src={funcGetUserpic()} />
                        <h3 className="chat-list__name-user">{funcGetName()}</h3>
                    </div>

                    <div className="chat-list__item-message">
                        <p className="chat-list__time">{time}</p>
                        <div className="chat-list__text-wrapper">
                            <p className="chat-list__text-message">
                                {message}
                            </p>
                        </div>
                    </div>

                </div>
            </li>
        </>
    );
};

export default ChatRoomMessage;