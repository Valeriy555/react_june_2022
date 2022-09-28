import {baseURL, urls} from "../configs";

const getPosts = () => {
    return fetch(baseURL+urls.posts)
        .then(value => value.json())

}

const getPostsId = (id) => {
    return fetch(baseURL+urls.posts+'/'+id)
        .then(value => value.json())

}

export {getPosts, getPostsId}