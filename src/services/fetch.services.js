import {baseURL, urls} from "../configs";

const getUsers = () => {
return fetch(baseURL+urls.users)
    .then(value => value.json())

}

const getUsersId = (id) => {
    return fetch(baseURL+urls.users+'/'+id)
        .then(value => value.json())

}

export {getUsers,getUsersId}