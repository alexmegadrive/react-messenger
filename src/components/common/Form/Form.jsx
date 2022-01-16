import React from "react";

import './Form.css';

const Form = ({
    children,
    buttonText,
    onSubmit,
}) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            { children }
            <button className="form__button">{buttonText}</button>
        </form>

    )
}

export default Form;