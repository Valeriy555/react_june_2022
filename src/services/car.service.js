import {axiosService} from "./axios.service";
import {urls} from "../configs";

const carService = {
    getAllCars: () => axiosService.get(urls.cars),
    getByIdCar: (id) => axiosService.get(`${urls.cars}/${id}`),
    createCar: (car) => axiosService.post(urls.cars, car),
    updateByIdCar: (id, data) => axiosService.put(`${urls.cars}/${id}`,data),
    deleteByIdCar: (id) => axiosService.delete(`${urls.cars}/${id}`),

}

export {carService}