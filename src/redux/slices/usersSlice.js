import { createSlice } from "@reduxjs/toolkit";
import userpic from '../../icon/test_photo.jpg';


export const usersSlice = createSlice({
    name: 'users',
    initialState:
        [
            {
                name: "Alex",
                surname: "V",
                email: "test@m.ru",
                password: "12345",
                userpic: "https://pbs.twimg.com/profile_images/1057002966840827904/466s7Vf4.jpg"
            },
            {
                name: "David",
                surname: "V",
                email: "david@m.ru",
                password: "12345",
                userpic: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
            },
            {
                name: "Smith",
                surname: "V",
                email: "smith@m.ru",
                password: "12345",
                userpic: "https://ru-static.z-dn.net/files/ddd/02bd3a23f077cda4cc1843b6467a4db1.jpg"
            }
        ]

    ,
    reducers: {
        addNewUser: (state, action) => {
            return     [
                    ...state,
                    {
                        name: action.payload.name,
                        surname: action.payload.surname,
                        email: action.payload.email,
                        password: action.payload.password,
                        userpic: userpic
                    }
                ]

        },
        updateUserInfo: (state, action) => {

            const indexUser = state.findIndex((user) => user.email === action.payload.loggedUser);
            if (indexUser !== 1) {
            return  [
                ...state.slice(0, indexUser),
                {
                    name: action.payload.name,
                    email: action.payload.email,
                    password: action.payload.password,
                    userpic: action.payload.userpic
                },   ...state.slice(indexUser + 1),
            ]
        } else {   }

        },

        updateUserPic: (state, action) => {

            const indexUser = state.findIndex((user) => user.email === action.payload.loggedUser);
            if (indexUser !== 1) {
                return  [
                    ...state.slice(0, indexUser),
                    {
                        name: action.payload.name,
                        email: action.payload.email,
                        password: action.payload.password,
                        userpic: action.payload.userpic,
                    },   ...state.slice(indexUser + 1),
                ]
            } else {   }
        }
    }
})

export const {
    addNewUser,
    updateUserInfo,
    updateUserPic
} = usersSlice.actions;

export default usersSlice.reducer;