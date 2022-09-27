export  function User(props) {
    let {item: user} = props

    return (
        <div>
            <h2>{user.id}) {user.name}</h2>
            <p>{user.address.city}) {user.email}</p>
        </div>
    );
}