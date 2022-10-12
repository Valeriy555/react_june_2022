import {useSelector} from "react-redux";

const UserSingle = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    return (
        <div>
            <b>Name:</b>  {currentUser && currentUser.name} <br/>
            <b>Username:</b>  {currentUser && currentUser.username} <br/>
            <b>Email:</b> {currentUser && currentUser.email} <br/>
            <b>Phone:</b> {currentUser && currentUser.phone} <br/>
            <b>Website:</b> {currentUser && currentUser.website} <br/>


        </div>
    );
};

export {UserSingle};