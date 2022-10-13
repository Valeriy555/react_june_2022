import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {User} from "./User";
import {userActions} from "../../redux";


const Users = () => {
    const dispatch = useDispatch(); // добавляет в стор данные (юзеров)
    const {users,loading, error } = useSelector(state => state.userReducer); // достать из стора


    useEffect(() => {
        dispatch(userActions.getAll())


    }, [])

    return (
        <div>

            {loading && <h1>Loading........................</h1>}
            {error && <h1>Error</h1>}

            {users.map(user => <User key={user.id} user={user}/>)}

        </div>
    );
};

export {Users};