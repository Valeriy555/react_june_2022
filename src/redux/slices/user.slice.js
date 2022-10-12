import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

let initialState = {  // начальный стейт 'userSlice'
    users: [],
    currentUsers: null,
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
            const {data} = await userService.getAllUsers(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},// синхронный метод

    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [getById.fulfilled]: (state, action) => {
            state.users = action.payload
        }
    }

});


const {reducer: userReducer, actions: {}} = userSlice; // синхронный метод


const userActions = {
    getAll,
    getById
}

export {
    userReducer,
    userActions
}