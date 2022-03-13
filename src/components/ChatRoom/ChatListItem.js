import React from 'react';

const ChatListItem = ({chat, handleSelectChat} ) => {
    const onSelectChat = (event) => {
        handleSelectChat(event)

    }
    return (

            <div  className= {`ChatMainList_Item ${chat.selected ? "selectedChat" : "" }`}
                 onClick={onSelectChat}>
                {chat.room_name}
            </div>
    );
};

export default ChatListItem;