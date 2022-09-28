import {useLocation} from "react-router-dom";

const UserDetails = () => {
    const {state: user} = useLocation();


    return (
        <div>
            <h2>option with "useLocation" </h2>

            <h3>{user.id}) {user.name} - {user.username}</h3>
            <p><b>Address:</b>  {user.address.city}</p>
            <p><b>Phone: </b>{user.phone} </p>
            <p><b>Website:</b> {user.website}</p>
            <p><b>Email:</b> {user.email}</p>

        </div>
    );
};

export {UserDetails};