import React from 'react' ;

const Post = (props) => {

    return (
        <div>
            <h5>Auther</h5>
            <p>{props.postText}</p>
            <button>Like</button>
            <button>Comment</button>
        </div>
    )
}

export default Post;