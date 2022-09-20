import User from "./User";
import {useEffect, useState} from "react";
import {getFetchUsers} from "../services/fetch.services";
import {userAxiosService} from "../services/axios.service";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (pohuy) => {
        setUser(pohuy)
    }

    useEffect(() => {

      getFetchUsers().then(value => setUsers(value)); // через fetch

      userAxiosService.getAxiosUser().then(value => setUsers(value.data)) // через axios
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