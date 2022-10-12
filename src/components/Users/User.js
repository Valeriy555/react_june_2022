import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {
    const dispatch = useDispatch(); // добавляет в стор данные (юзеров)
    return (
        <div>
            <div>{user.id}) {user.name} </div>

            <button onClick={() => dispatch(userActions.getById({id}))}>select</button>

            <hr/>
        </div>
    );
};

export {User};