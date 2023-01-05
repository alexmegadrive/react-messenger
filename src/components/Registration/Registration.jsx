import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../common/Input/Input";
import Form from "../common/Form/Form";
import ModalWindow from "../common/ModalWindow/ModalWindow";
import NavigationInModal from "../common/NavigationInModal/NavigationInModal";
import { addNewUser } from "../../redux/slices/usersSlice";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);

  console.log(users);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const indexUserWithSameEmail = users.findIndex(
      (user) => user.email === email
    );
    if (indexUserWithSameEmail === -1) {
      dispatch(
        addNewUser({
          name,
          surname,
          email,
          password,
        })
      );
      console.log("Created new user");

      navigate("/authorization");
    } else {
      console.log("Already has user with such email");
    }
  };

  return (
    <ModalWindow title="Registration" isAuth="false">
      <Form buttonText="Create an account" onSubmit={handleSubmit}>
        <Input
          variation="textInput"
          textPlaceholder="Name"
          value={name}
          onChange={setName}
        />
        <Input
          variation="textInput"
          textPlaceholder="Last name"
          value={surname}
          onChange={setSurname}
        />
        <Input variation="emailInput" value={email} onChange={setEmail} />
        <Input
          variation="passwordInput"
          textPlaceholder="Password"
          value={password}
          onChange={setPassword}
        />
        <Input
          variation="passwordInput"
          textPlaceholder="Repeat password"
          value={repeatPassword}
          onChange={setRepeatPassword}
        />
      </Form>
      <NavigationInModal
        subtitle="Already registered?"
        textLink="Login"
        pathLink="/authorization"
      />
    </ModalWindow>
  );
};

export default Registration;
