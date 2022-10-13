import {useSelector} from "react-redux";

const UserSingle = () => {
    const {currentUser, userFromAPI} = useSelector(state => state.userReducer);
    return (
        <div>
            <b>Name:</b> {currentUser && currentUser.name} <br/>
            <b>Username:</b> {currentUser && currentUser.username} <br/>
            <b>Email:</b> {currentUser && currentUser.email} <br/>
            <b>Phone:</b> {currentUser && currentUser.phone} <br/>
            <b>Website:</b> {currentUser && currentUser.website} <br/>

            <hr/>
            <h3>User from API</h3>
            <b>User address:</b>
            {userFromAPI && userFromAPI.name}
            {userFromAPI && userFromAPI.username} <br/>
            <b>City:</b> {userFromAPI && userFromAPI.address.city} <br/>
            <b>Street:</b> {userFromAPI && userFromAPI.address.street} <br/>
            <b>Suite:</b> {userFromAPI && userFromAPI.address.suite} <br/>

        </div>
    );
};

export {UserSingle};