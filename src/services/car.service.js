import {axiosService} from "./axios.service";
import {urls} from "../configs";


const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars,car),
    // getById: () => axiosService.get(`${urls.cars}/${id}`),
    // updateById: () => axiosService.put(`${urls.cars}/${id}`,car),
    // deleteById: () => axiosService.delete(`${urls.cars}/${id}`)
}

export {carService}