import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {  // начальный стейт 'carSlice'
    cars: [],
    currentCar: null,
    loading: false,
    error: null,
    carFromApi: null,

};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAllCars();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'carSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await carService.getByIdCar(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.createCar(car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById ',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateByIdCar(car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar ',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteByIdCar(id);
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: { // синхронный запрос
        setCurrentCar: (state, action) => {
            state.currentUser = action.payload
        },

    },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => { // выполненный
                state.cars = action.payload;
                state.error = null;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => { // в ожидании
                state.loading = true;
            })

            .addCase(getById.fulfilled, (state, action) => { // данные юзера с апи
                state.carFromApi = action.payload;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const carIndex = state.cars.findIndex(value => value.id === action.payload);
                state.cars.splice(carIndex,1)
            })
            .addCase(updateById.fulfilled,(state, action) =>{
                const findCar = state.cars.find(value => value.id === action.payload.id)
                Object.assign(findCar,action.payload);
                state.currentCar = null
            })
});


const {reducer: carsReducer, actions: {setCurrentCar, deleteById}} = carSlice; // синхронный метод


const carsActions = {
    getAll,
    getById,
    setCurrentCar,
    deleteById,
    create,
    updateById

}

export {
    carsReducer,
    carsActions
}