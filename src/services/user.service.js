import {axiosService} from "./axios.service";
import {urls} from "../configs";

const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    getByIdUser: (id) => axiosService.get(`${urls.users}/${id}`)
}

export {userService}