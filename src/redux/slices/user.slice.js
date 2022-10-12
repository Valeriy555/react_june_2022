import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

let initialState = {  // начальный стейт 'userSlice'
    users: [],
    currentUser: null,
    loading: false,
    error: null

};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAllUsers();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await userService.getByIdUser(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: { // синхронный запрос
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
    },

    extraReducers: { // ассинхронный запрос
        [getAll.fulfilled]: (state, action) => {
            state.users = action.payload
        },

    }

});


const {reducer: userReducer, actions: {setCurrentUser}} = userSlice; // синхронный метод


const userActions = {
    getAll,
    getById,
    setCurrentUser

}

export {
    userReducer,
    userActions
}