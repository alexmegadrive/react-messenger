import React from 'react';

import './ChatItem.css';

const ChatItem = () => {
    return (
        <li className="chat-list__item">
            <div className="chat-list__item__wrapper">
            <h3 className="chat-list__item__chatname">Название чата 111</h3>
                <div className="chat-list__item-user-info">
                    <div className="chat-list__user-avatar" />
                    <h3 className="chat-list__name-user">ФИО клиента</h3>
                </div>

                <div className="chat-list__item-message">
                    <p className="chat-list__time">12:15</p>
                    <div className="chat-list__text-wrapper">
                        <p className="chat-list__text-message">
                            Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean massa. Cum sociis natoque
                            penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis,
                            sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec,
                            vulputate eget, arcu. In enim justo, rhoncus
                            ut, imperdiet a, venenatis vitae, justo.
                            Nullam dictum felis eu pede mollis pretium.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Donec quam
                            felis, ultricies nec, pellentesque eu, pretium quis,
                            sem. Nulla consequat massa quis enim. Donec pede
                            justo, fringilla vel, aliquet nec, vulputate eget,
                            arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis vitae, justo. Nullam dictum felis eu
                            pede mollis pretium.
                        </p>
                    </div>
                </div>

            </div>
        </li>
    );
};

export default ChatItem;