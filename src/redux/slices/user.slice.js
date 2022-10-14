import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

let initialState = {  // начальный стейт 'userSlice'
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    userFromApi: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue, dispatch}) => {
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
        deleteById:(state,action)=>{
            const index = state.users.findIndex(user=>user.id === action.payload);
            state.users.splice(index,1)
        }
    },

    extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => { // выполненный
                    state.users = action.payload
                    state.loading = false
                })
                .addCase(getAll.rejected, (state, action) => { // отклоненный
                    state.error = action.payload
                    state.loading = false
                })
                .addCase(getAll.pending, (state, action) => { // в ожидании

                    state.loading = true
                })
                .addCase(getById.fulfilled, (state, action) => { // данные юзера с апи
                    state.userFromAPI = action.payload
                })
});


const {reducer: userReducer, actions: {setCurrentUser,deleteById}} = userSlice; // синхронный метод


const userActions = {
    getAll,
    getById,
    setCurrentUser,
    deleteById

}

export {
    userReducer,
    userActions
}