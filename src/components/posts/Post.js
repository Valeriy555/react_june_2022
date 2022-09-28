export function Post(props) {
    let {item: post} = props

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <hr/>
        </div>
    );
}

