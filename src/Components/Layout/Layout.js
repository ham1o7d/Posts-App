import React from 'react' ;
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' ;

import Nav from '../Nav/Nav' ;
import AddPost from '../../Containers/AddPost/AddPost' ;
import LogIn from '../../Containers/LogIn/LogIn' ;
import SignIn from '../../Containers/SignIn/SignIn' ;
import Posts from '../../Containers/Posts/Posts' ;

import './Layout.css' ;

class Layout extends React.Component {
      
    state= {
        
        accounts: [
            {
                name: 'Ahmed Ghanim',
                email: 'Ahmed@gmail.com',
                password: '123456'
            },
            {
                name: 'Osama Ghanim',
                email: 'Osama@gmail.com',
                password: '123456'
            },
            {
                name: 'Ghanim Ghanim',
                email: 'Ghanim@gmail.com',
                password: '123456'
            }
        ],
        posts: [
            'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        'Ahmed is very important man, He hope to be a famous in web development '
    ]
    }
    addPostHandler(post) {
        console.log(post) ;
        this.setState( (prevState) => ({
            posts: prevState.posts.concat(post)
        }) );
    }

    componentDidMount(){
        
    }

    
    
    render() {
        const cuurntAccount = this.state.accounts[0] ;
        return (

            <div>
                <button onClick={this.testHandler} >test</button>
              <Router>
                  <Nav />
                  <div  className='layout'>
                  <Switch>

                      <Route exact path='/' > 
                        <Posts 
                            posts={this.state.posts} 
                            cuurntAccount={cuurntAccount}

                        /></Route>

                      <Route exact path='/add-post'>
                        <AddPost 
                            addpost= {this.addPostHandler} 
                                
                        /></Route>

                      <Route exact path='/log-in' >
                        <LogIn 
                            test= {this.state.accounts[1].name }

                        /></Route>

                      <Route exact path='/sign-in' >
                        <SignIn 
                            test= {this.state.accounts[2].name }

                        /></Route>

                  </Switch>
                  </div>
              </Router>   
                   
            </div>
        );
    }
}

export default Layout;