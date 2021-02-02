import React from 'react' ;
import Nav from '../../Components/Nav/Nav';
import Layout from '../../Components/Layout/Layout'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' ;

class MainPost extends React.Component {

    render() {
        return (
            <div>
                <Layout />
            </div>
        )
    }
}

export default MainPost;