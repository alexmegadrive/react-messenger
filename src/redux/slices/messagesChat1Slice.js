import {createSlice} from "@reduxjs/toolkit";

export const chat1historySlice = createSlice({
    name: 'chat1history',
    initialState:
        [
            {
                room_name: "ROOM1",
                history: [{
                    email: "test@m.ru",
                    time: "11-45",
                    message: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
                },
                    {
                        email: "david@m.ru",
                        time: "12-00",
                        message: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
                    },
                    {
                        email: "smith@m.ru",
                        time: "12-00",
                        message: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
                    },
                    {
                        email: "david@m.ru",
                        time: "12-00",
                        message: "^_^ ^_^ ^_^  ",
                    },
                    {
                        email: "test@m.ru",
                        time: "12-00",
                        message: "Я Алекс, всем привет!  ",
                    },
                    {
                        email: "david@m.ru",
                        time: "12-00",
                        message: "Hello hello hello ",
                    }],
                selected:false
            },

            {
                room_name: "FrontendRoom",
                history: [{
                    email: "test@m.ru",
                    time: "11-45",
                    message: "Hello all developers  ",
                },
                    {
                        email: "david@m.ru",
                        time: "12-00",
                        message: "And warm welcome! ",
                    }],
                selected:false
            },

            {
                room_name: "NewRoom 3",
                history: [{
                    email: "test@m.ru",
                    time: "10-45",
                    message: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
                },
                    {
                        email: "david@m.ru",
                        time: "12-00",
                        message: "it's a NEW ROOM  ",
                    }],
                selected:false
            },

            {
                room_name: "ROOM 4",
                history: [{
                    email: "test@m.ru",
                    time: "10-45",
                    message: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ",
                },
                    {
                        email: "david@m.ru",
                        time: "12-00",
                        message: "44444 4444 4444 ",
                    }],
                selected:false
            },

        ],

    reducers: {
        addNewMessage: (state, action) => {

            const indexRoom = state.findIndex((room) => room.room_name === action.payload.room_name);
            if (indexRoom !== -1) {
                return [

                    ...state.slice(0, indexRoom),
                    {
                        ...state[indexRoom],
                        history: [
                            ...state[indexRoom].history,
                            {
                                email: action.payload.email,
                                time: action.payload.time,
                                message: action.payload.message,
                            }

                        ]
                    },
                    ...state.slice(indexRoom + 1),
                ]


            } else {

            }


        },

        selectedRoom:  (state, action) => {
        const selectRoomIndex = state.findIndex((room) => room.room_name === action.payload);
        if (selectRoomIndex !== -1){
            return state.map((item, index) => {
                return selectRoomIndex === index ? {...item, selected:true } : {...item, selected:false }
            } )
        }
        },

        addNewRoom: (state, action) => {
            console.log(state)
            return [
                ...state.map((item, index) => {
                    return { ...item, selected:false }
                }),
                {
                    room_name: action.payload.room_name,
                    history: [],
                    selected: true,
                }
            ]
        }
    },

})

export const {
    addNewMessage,
    addNewRoom,
    selectedRoom
} = chat1historySlice.actions;

export default chat1historySlice.reducer;