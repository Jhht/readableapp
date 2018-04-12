import React, { Component } from 'react';
import Post from './Post'
import { Route, Switch } from 'react-router-dom'
import ReadableIndex from './ReadableIndex'
import CreatePost from './CreatePost'
import CreateEditPost from './EditPost'
import { BrowserRouter } from 'react-router-dom'
import Error from './Error'


class App extends Component {


  render() {


    return (
      <BrowserRouter>
        <Switch>
               <Route exact path ='/'  component={ReadableIndex}/>
                <Route exact path='/new' component={CreatePost} />
                <Route exact path='/:eror' component={Error} />
                <Route exact path='/edit/:postId' component={CreateEditPost} />
                <Route exact path='/:category' component={ReadableIndex} />
                <Route exact path='/:category/:postId' component={Post} />
        </Switch>
      </BrowserRouter>
    );
  }

}




export default App
