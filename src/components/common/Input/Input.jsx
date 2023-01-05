import React, { useState } from "react";

import pathIcon1 from "../../../icon/icon1.svg";
import pathIcon2 from "../../../icon/icon2.svg";
import pathIcon3 from "../../../icon/icon3.svg";
import pathIcon4 from "../../../icon/icon4.svg";

import "./Input.css";

const Input = ({ variation, textPlaceholder, onChange, ...props }) => {
  const handleInputFields = () => {
    switch (variation) {
      case "emailInput":
        return {
          type: "email",
          pathIcon: pathIcon3,
          textPlaceholder: "test: test@m.ru",
        };
      case "passwordInput":
        return {
          type: "password",
          pathIcon: pathIcon4,
          textPlaceholder: "test: 12345",
        };
      case "textInput":
      default:
        return {
          type: "text",
          pathIcon: pathIcon1,
          textPlaceholder,
        };
    }
  };

  const { type, pathIcon, textPlaceholder: placeholder } = handleInputFields();

  const [typeInput, setTypeInput] = useState(type);

  const handleChangeInput = (event) => {
    onChange(event.target.value);
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    typeInput === "text" ? setTypeInput("password") : setTypeInput("text");
  };

  return (
    <div className="input__wrapper">
      <div className="input__icon-wrapper">
        <img className="input__icon" src={pathIcon} alt="Иконка" />
      </div>
      <input
        type={typeInput}
        className="input"
        placeholder={placeholder}
        onChange={handleChangeInput}
        {...props}
      />
      {variation === "passwordInput" ? (
        <button className="input__button-eye" onClick={handleShowPassword}>
          <img className="input__icon-eye" src={pathIcon2} alt="Иконка глаза" />
        </button>
      ) : null}
    </div>
  );
};

export default Input;
