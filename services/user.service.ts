import {axiosService, AxiosTypeResponse} from "./axios.service";
import {IUser} from "../interfaces";

const userService = {
    getAll: (): AxiosTypeResponse<IUser[]> => axiosService.get('/users'),
    getById: (id: number):AxiosTypeResponse<IUser> => axiosService.get(`/users/${id}`)
}

export {
    userService
}