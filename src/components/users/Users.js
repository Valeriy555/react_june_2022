import User from "./User";
import {useEffect, useState} from "react";
import {getUsers} from "../services/fetch.services";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (pohuy) => {
        setUser(pohuy)
    }

    useEffect(() => {

      getUsers().then(value => setUsers(value));
    }, []);


    return (
        <div>
            <h2>{user && user.name} </h2>
            <h3>{user?.email} </h3>
            <hr/>

            {users.map(user => (<User item={user} key={user.id}
                                      stateLifting={lift}/>))}
        </div>
    );
}