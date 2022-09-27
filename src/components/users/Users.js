import {useState} from "react";
import {User} from "./User";

export function Users() {

    let [users, setUsers] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value)
        });

    return (
        <div>
            {users.map(user => (<User item={user} key={user.id}/>))}
        </div>
    );
}