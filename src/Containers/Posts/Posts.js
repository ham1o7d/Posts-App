import React from 'react' ;
import Post from '../../Components/Post/Post' ;

const Posts = (props) =>{
    return (
        <div> 
            <h3>All Posts</h3>
            <div>
                {props.posts.map (post => {
                    return (
                        <Post 
                            key={post}
                            postText={post}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Posts ;