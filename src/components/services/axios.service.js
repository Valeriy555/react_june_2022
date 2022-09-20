import axios from "axios";
import {baseURL, urls} from "../../config";

const axiosService = axios.create({baseURL});

const userAxiosService = {
    getAxiosUser: () => axiosService.get(urls.users),
    getByIdUser: (id) => axiosService.get(`${urls.users}/${id}`),
    getByUserPosts: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}


    export { axiosService, userAxiosService }