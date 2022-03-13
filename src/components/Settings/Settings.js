import React, {useContext, useState} from "react";
import Header from "../common/Header/Header";
import "./settings.css"
import userpic from '../../icon/test_photo.jpg';
import change_photo from '../../icon/change_photo.png';
import {useDispatch, useSelector} from "react-redux";
import {addNewRoom} from "../../redux/slices/messagesChat1Slice";
import {updateUserInfo, updateUserPic} from "../../redux/slices/usersSlice";
import {ContextLoggedUser} from "../../App";
import {addDataUser} from "../../redux/slices/loggedInUserSlice";



const Settings = (setLoggedIn, signOut) => {

    const dispatch = useDispatch();
    const logged_user = useSelector(state => state.user);
    const [loggedUserEmail, setLoggedUserEmail] = useContext(ContextLoggedUser);

    const [newFirstName, setNewFirstName] = useState(logged_user.name);
    const [newLastName, setNewLastName] = useState(logged_user.password);
    const [newEmail, setNewEmail] = useState(logged_user.email);
    const [newUserPic, setNewUserPic] = useState(logged_user.userpic);




    const handleChangeFirstName = (event) => {
        setNewFirstName(event.target.value)
    }
    const handleChangeLastName = (event) => {
        setNewLastName(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setNewEmail(event.target.value)
    }
    const handleChangeUserpic = (event) => {
        setNewUserPic(event.target.value)
    }

    const handleUpdateUserInfo = (event) => {

        const currentLoggedEmail = loggedUserEmail.email;
        console.log(currentLoggedEmail);

        dispatch(updateUserInfo({
            loggedUser: currentLoggedEmail,
            name: newFirstName,
            password: newLastName,
            email: newEmail,
            userpic: newUserPic,
        }));

        dispatch(addDataUser(
            {
                loggedUser: currentLoggedEmail,
            name: newFirstName,
            password: newLastName,
            email: newEmail,
            userpic: newUserPic,
            }))
        alert('Данные обновлены')
    }


    const UploadPhoto = () => {
        let newPromptUserPicture = prompt('Вставьте путь к картинке')
        const currentLoggedEmail = loggedUserEmail.email;

        if (newPromptUserPicture) {
        dispatch(updateUserInfo({
            loggedUser: currentLoggedEmail,
            name: newFirstName,
            password: newLastName,
            email: newEmail,
            userpic: newPromptUserPicture,
        }))  }
        else {
            return
        }



    }


    return (
        <div className="main_container">
            <Header variation="settings" setLoggedIn={setLoggedIn} signOut={signOut}/>
            <div className="settings__container">
                <div className="settings__container_left">
                    <div className="profile_picture_settings_container">
                        <img className="profile_picture_settings header_profile_picture" src={logged_user.userpic}
                             alt=""/>
                        <div className="profile_picture_settings_container_button">
                            <div className="profile_picture_settings_container_button_div" onClick={UploadPhoto}>
                                <div><img src={change_photo} alt=""/></div>
                                <div style={{textAlign: "center"}}>Изменить<br/>фото</div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="settings__container_right">
                    <form action="/action_page.php">
                        <div className="settings__userdata_wrapper">
                            <br/>
                            <div className="settings__userdata_grid_container">


                                <div className="settings__userdata_name">
                                    <label htmlFor="username">Имя пользователя</label><br/>
                                    <input className="reg_input reg_input_style"
                                           type="text"
                                           placeholder=""
                                           name="username"
                                           value={newFirstName}
                                           onChange={handleChangeFirstName}
                                           required/>
                                </div>

                                <div className="settings__userdata_lastname">
                                    <label htmlFor="username">Пароль</label><br/>
                                    <input className="reg_input reg_input_style"
                                           type="password"
                                           placeholder=""
                                           name="lastname"
                                           value={newLastName}
                                           onChange={handleChangeLastName}

                                           required/>
                                </div>

                                <div className="settings__userdata_email">
                                    <label htmlFor="username">Email</label><br/>
                                    <input className="reg_input reg_input_style"
                                           type="text"
                                           placeholder=""
                                           name="email"
                                           value={newEmail}
                                           onChange={handleChangeEmail}
                                           required/>
                                </div>


                                <div className="settings__userdata_userpic">
                                    <label htmlFor="username">Фото профиля, указать HTTPS</label><br/>
                                    <input className="reg_input reg_input_style"
                                           type="text"
                                           placeholder=""
                                           name="userpic"
                                           value={newUserPic}
                                           onChange={handleChangeUserpic}
                                           required/>
                                </div>

                            </div>


                        </div>
                        <input className="settings__button"
                               type="button"
                               value="Сохранить изменения"
                               onClick={handleUpdateUserInfo}
                        />

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Settings;