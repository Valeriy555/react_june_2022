import {useNavigate} from "react-router-dom";

export function Post(props) {
    let {item: post} = props
    const navigate = useNavigate();

    return (
        <div>
            <h2>{post.id}) {post.title}</h2>

            <button onClick={() => {
                navigate(post.id.toString(), {state: {...post}}  )
            }}>details Post
            </button>

            <hr/>
        </div>
    );
}

