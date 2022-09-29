import {useLocation} from "react-router-dom";

function PostDetails() {
    let {state: post} = useLocation();
    // console.log(post);

    return (
        <div>
            <h3>UserId: {post.userId}<br/> IdPost: {post.id}) </h3>
            <p><b>Title: </b>{post.title}</p>
            <p><b>Body: </b>{post.body}</p>
        </div>
    );
}

export {PostDetails};