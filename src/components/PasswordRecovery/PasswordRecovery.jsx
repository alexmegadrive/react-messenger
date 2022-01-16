import React from "react";

import Input from "../common/Input/Input";
import Form from "../common/Form/Form";
import ModalWindow from "../common/ModalWindow/ModalWindow";
import NavigationInModal from "../common/NavigationInModal/NavigationInModal";

const PasswordRecovery = () => {
    return (
        <ModalWindow title="Восстановление пароля" isAuth={false}>
            <Form buttonText="Восстановить пароль">
                <Input variation="emailInput" />
                <Input variation="passwordInput" textPlaceholder="Пароль"/>
                <Input variation="passwordInput" textPlaceholder="Повторите пароль"/>
            </Form>
            <NavigationInModal
                subtitle="На страницу авторизации"
                textLink="Авторизация"
                pathLink="/authorization"
            />
            <NavigationInModal
                subtitle="На страницу регистрации"
                textLink="Регистрация"
                pathLink="/registration"
            />
        </ModalWindow>
    )
}

export default PasswordRecovery;