import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ChatMainStyles.css";
import AddChat from "../common/AddChat/AddChat";
import { selectedRoom } from "../../redux/slices/messagesChat1Slice";
import ChatListItem from "./ChatListItem";

const ChatMainList = ({ onSelectedChat }) => {
  const chat_message = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const handleSelectChat = (event) => {
    dispatch(selectedRoom(event.target.textContent));
    const currentChat = chat_message.find(
      (item) => item.room_name === event.target.textContent
    );
    onSelectedChat(currentChat);
    console.log("выбран чат {currentChat}:");
    console.log(currentChat);
  };

  return (
    <>
      <div className="ChatMainList_Container">
        <div>
          <div className="ChatMainList_Title">
            <div>Channels List</div>
          </div>
          <div className="ChatMainList_Group">
            {chat_message.map((item, index) => {
              return (
                <ChatListItem
                  key={index}
                  chat={item}
                  handleSelectChat={handleSelectChat}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMainList;
