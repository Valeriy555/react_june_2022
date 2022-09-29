import {Link} from "react-router-dom";

export function User(props) {
    let {item: user} = props

    return (
        <div>
            <h2>{user.id}) {user.name}</h2>

            <div>
                <Link to={`${user.id}`} state={{...user}}>
                    <button key={user.id}>details</button>
                </Link>
            </div>

            <div>
                <Link to={`v2/${user.id}`} state={{...user}}>
                    <button key={user.id}>details v2</button>
                </Link>
            </div>

            <hr/>
        </div>
    );
}