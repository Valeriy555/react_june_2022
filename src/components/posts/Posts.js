import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {Post} from "./Post";
import {getPosts} from "../../services";
import css from './posts.module.css'


export function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {

        getPosts().then(value => setPosts([...value]));
    }, [])


    return (
        <div>
            <div className={css.wrap}>
                <div className={css.users}>
                    {posts.map(post => (<Post item={post} key={post.id}/>))}
                </div>
                <div className={css.details}>
                    <Outlet/>
                </div>
            </div>

        </div>

    );
}