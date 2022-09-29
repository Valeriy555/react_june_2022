import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {User} from "./User";
import {getUsers} from "../../services";
import css from './users.module.css'

export function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {

        getUsers().then(value => setUsers([...value]));
    }, [])


    return (
        <div>
            <div className={css.wrap}>
                <div className={css.users}>
                    {users.map(user => (<User item={user} key={user.id}/>))}
                </div>
                <div className={css.details}>
                    <Outlet/>
                </div>
            </div>

        </div>

    );
}