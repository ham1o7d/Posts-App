import React from 'react' ;
import {Link} from 'react-router-dom' ; 
import './Nav.css'

const Nav = (props) => {
    return(
        <header>
            <div className='logo'>
                <h4>LO<span>V</span>EE</h4>
            </div>
            <nav>
                <ul>
                    <li> <Link to='/'>Posts</Link> </li>
                    <li> <Link to='add-post' >Add Post</Link> </li>
                    <li> <Link to='log-in' >Log In</Link> </li>
                    <li> <Link to='sign-in' >Sign In</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav