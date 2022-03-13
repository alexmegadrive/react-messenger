import React, {useContext, useState} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../common/Input/Input";
import Form from "../common/Form/Form";
import ModalWindow from "../common/ModalWindow/ModalWindow";
import NavigationInModal from "../common/NavigationInModal/NavigationInModal";
import {ContextLoggedUser} from "../../App";
import {addDataUser} from "../../redux/slices/loggedInUserSlice";

const Authorization = ({
    setLoggedIn
}) => {

    const navigate = useNavigate();
    const users = useSelector(state => state.users);

    console.log(users);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedUserEmail, setLoggedUserEmail] = useContext(ContextLoggedUser);
    const dispatch = useDispatch();



    const handleSubmit = (event) => {
        console.log('Начало авторизации');
        event.preventDefault();
        const loggedUser = users.findIndex((user) => user.email === email);

        try {
            if(users[loggedUser].password === password){
                console.log(users[loggedUser])
                setLoggedUserEmail(users[loggedUser]);
                setLoggedIn(true);
                navigate('/');
                dispatch(addDataUser(users[loggedUser]))
             }
            else {alert('Неправильный логин или пароль');}
        } catch (err)
         {            alert('Неправильный логин или пароль');
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