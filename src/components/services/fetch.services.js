import {baseURL, urls} from "../../config";


const getUsers = () => {

   return fetch(baseURL+urls.users)
        .then(value => value.json())

}

 const getUser = (id) => {

    return fetch(baseURL+urls.users+'/'+id)
        .then(value => value.json())

}

export {getUsers,getUser}