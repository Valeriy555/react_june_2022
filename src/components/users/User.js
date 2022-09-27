import {Link} from "react-router-dom";

export  function User(props) {
    let {item: user} = props

    return (
        <div>
            <h2>{user.id}) {user.name}</h2>

            <div>
                <Link to={`/users/${user.id}`} state={{...user}}>details</Link>
            </div>

            <div>
                <Link to={`/users/v2/${user.id}`} state={{...user}}>details v2</Link>
            </div>
            <hr/>
        </div>
    );
}