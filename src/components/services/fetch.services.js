import baseURL, {urls} from "../../config/urls";


const getUsers = () => {

   return fetch(urls.users)
        .then(value => value.json())

}

//  const getUser = (id) => {
//
//     return fetch(urls.users+'/'+id)
//         .then(value => value.json())
//
// }

export {getUsers}