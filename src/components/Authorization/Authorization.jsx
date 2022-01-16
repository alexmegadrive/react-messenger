import React, { useState } from "react";
import {
    useSelector
} from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../common/Input/Input";
import Form from "../common/Form/Form";
import ModalWindow from "../common/ModalWindow/ModalWindow";
import NavigationInModal from "../common/NavigationInModal/NavigationInModal";

const Authorization = ({
    setLoggedIn,
}) => {

    const navigate = useNavigate();

    const users = useSelector(state => state.users);

    console.log(users);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const indexUser = users.findIndex((user) => user.email === email);
        if(users[indexUser].password === password){
            setLoggedIn(true);
            navigate('/');
        } else {
            console.log('Неправильный логин или пароль');
        }
    }

    return (
        <ModalWindow isAuth="true">
            <Form buttonText="Войти" onSubmit={handleSubmit}>
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
            </Form>
            <NavigationInModal
                subtitle="На страницу регистрации"
                textLink="Регистрация"
                pathLink="/registration"
            />
            <NavigationInModal
                subtitle="На страницу восстановления пароля"
                textLink="Восстановление пароля"
                pathLink="/password-recovery"
            />
        </ModalWindow>
    )
}

export default Authorization;