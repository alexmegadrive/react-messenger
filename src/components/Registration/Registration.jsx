import React, { useState } from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../common/Input/Input";
import Form from "../common/Form/Form";
import ModalWindow from "../common/ModalWindow/ModalWindow";
import NavigationInModal from "../common/NavigationInModal/NavigationInModal";
import {
    addNewUser
} from "../../redux/slices/usersSlice";

const Registration = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector(state => state.users);

    console.log(users);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const indexUserWithSameEmail = users.findIndex((user) => user.email === email);
        if(indexUserWithSameEmail === -1){
            dispatch(addNewUser({
                name,
                surname,
                email,
                password,
            }));
            console.log('Учетная запись создана');

            navigate('/authorization');
        } else {
            console.log('Увы пользователь с данной почтой уже существует');
        }
    }

    return (
        <ModalWindow title="Регистрация" isAuth="false">
            <Form buttonText="Зарегистрироваться" onSubmit={handleSubmit}>
                <Input
                    variation="textInput"
                    textPlaceholder="Имя"
                    value={name}
                    onChange={setName}
                />
                <Input
                    variation="textInput"
                    textPlaceholder="Фамилия"
                    value={surname}
                    onChange={setSurname}
                />
                <Input
                    variation="emailInput"
                    value={email}
                    onChange={setEmail}
                />
                <Input
                    variation="passwordInput"
                    textPlaceholder="Пароль"
                    value={password}
                    onChange={setPassword}
                />
                <Input
                    variation="passwordInput"
                    textPlaceholder="Повторите пароль"
                    value={repeatPassword}
                    onChange={setRepeatPassword}
                />
            </Form>
            <NavigationInModal
                subtitle="Вы уже зарегистрированы?"
                textLink="Войти"
                pathLink="/authorization"
            />
        </ModalWindow>
    )
}

export default Registration;