import React from 'react' ;
import './AddPost.css';

class AddPost extends React.Component {

    state= {
        post: undefined
    }

    
   render() {
    return (
        <div className='add-post'> 
            <h1>Add Post</h1>
            <form >
                <input type='text' name='post' placeholder="What's on your mind?" 
                       onChange={ (event) =>{
                    this.setState( {post: event.target.value} ) }}/>
                <button className='post' type='button' onClick={this.props.addpost(this.state.post)} >Post to public</button>
            </form>
        </div>
    )
   }
}

export default AddPost ;
