import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {
    const dispatch = useDispatch(); // добавляет в стор данные (юзеров)

    const {id, name} = user;

    return (
        <div>
            <div>{id}) {name} </div>

            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>select</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>getFromAPI</button>
            <button onClick={() => dispatch(userActions.deleteById(id))}>delete</button>

            <hr/>
        </div>
    );
};

export {User};