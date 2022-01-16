import React from "react";

import pathIcon5 from '../../../icon/icon5.svg';

import './ModalWindow.css';

const ModalWindow = ({ children, title, isAuth }) => {
    return (
        <section className="modal-window">
            <div className="modal-window__content">
                <div className="modal-window__wrapper">
                    {isAuth ?
                        <img className="" src={pathIcon5} alt="Аватар" />
                        :
                        <h1 className="modal-window__title">{title}</h1>
                    }
                </div>
                {children}
            </div>
        </section>
    )
}

export default ModalWindow;