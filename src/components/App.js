import React, { Component } from 'react';
import { fetchCategories , fetchAllPosts} from '../utils/api'
import Categories from './Categories'
import Posts from './Posts'
import { Route, Switch } from 'react-router-dom'
import ReadableIndex from './ReadableIndex'
import { Link } from 'react-router-dom'
import CreateEditPost from './CreateEditPost'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'


class App extends Component {


  render() {

    const store = createStore(reducer, applyMiddleware(thunk))


    return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
               <Route exact path ='/'  component={ReadableIndex}/>
                <Route exact path='/new' component={CreateEditPost} />
                <Route exact path='/:category' component={ReadableIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
    );
  }

}




export default App