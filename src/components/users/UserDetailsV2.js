import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {getUsersId} from "../../services";


const UserDetailsV2 = () => {
    const {id} = useParams();
    let [userDetails, setUserDetails] = useState([]);


    useEffect( () => {

        getUsersId(id).then(value =>{setUserDetails({...value})});
    },[id])
    return (
        
        <div>
            <h2>option with "useParams"</h2>

            <h3>{userDetails.id}) {userDetails.name} - {userDetails.username}</h3>
            {/*<p><b>Address:</b>  {user.address.city}</p>*/}
            <p><b>Phone: </b>{userDetails.phone} </p>
            <p><b>Website:</b> {userDetails.website}</p>
            <p><b>Email:</b> {userDetails.email}</p>
        </div>
    );
};

export {UserDetailsV2};