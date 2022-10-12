import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {User} from "./User";
import {userActions} from "../../redux";


const Users = () => {
    const dispatch = useDispatch(); // добавляет в стор данные (юзеров)
    const {users} = useSelector(state => state.userReducer); // достать из стора


    useEffect(() => {
        dispatch(userActions.getAll())


    }, [])

    return (
        <div>

            {users.map(user => <User key={user.id} user={user}/>)}

        </div>
    );
};

export {Users};