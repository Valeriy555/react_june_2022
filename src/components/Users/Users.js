import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "./User";


const Users = () => {
    const dispatch = useDispatch(); // добавляет в стор данные (юзеров)
    const {users} = useSelector(state => state.userReducer); // достать из стора


    useEffect(() => {
        userService.getAllUsers().then(({data}) => dispatch(userActions.getAll(data)))


    }, [])

    return (
        <div>

            {users.map(user => <User key={user.id} user={user}/>)}

        </div>
    );
};

export {Users};