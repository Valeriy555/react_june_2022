export default function User(props) {
    let {item: user, stateLifting} = props

    return (
        <div>
            <h2>{user.id}) {user.name}</h2>
            <p>{user.address.city}) {user.email}</p>

            <button onClick={() => {
                stateLifting(user)
            }}>details</button>
        </div>
    );
}