import { createSlice } from "@reduxjs/toolkit";
import userpic from '../../icon/test_photo.jpg';
// import LoggedInUserSlice from "./loggedInUserSlice";


export const LoggedInUserSlice = createSlice({
    name: 'user',
    initialState: null,

    reducers: {
        addDataUser: (state, action) => {
          return   { ...action.payload }
        },
        clearDataUser: (state, action) => {
    return null
        },


    }
})

export const {
   addDataUser,
    clearDataUser,
} = LoggedInUserSlice.actions;

export default LoggedInUserSlice.reducer;