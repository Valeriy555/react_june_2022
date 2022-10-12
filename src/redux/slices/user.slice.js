import {createSlice} from "@reduxjs/toolkit";

let initialState = {  // начальный стейт 'userSlice'
    users: [],
    currentUsers: null,
    loading: false,
    error: null

};



const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: { // синхронный метод
        getAll: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    },

});

const {reducer: userReducer, actions: {getAll, setCurrentUser}} = userSlice; // синхронный метод


const userActions = {
    getAll,
    setCurrentUser
}

export {
    userReducer,
    userActions
}