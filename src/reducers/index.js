
import {combineReducers} from 'redux'
import {objectFromArray} from '../utils/helpers'


import {
    GET_POSTS,
    GET_CATEGORIES,
    GET_POSTS_BY_CAT,
    CREATE_POST,
    EDIT_POST,
    GET_POST_BY_ID,
    POST_SORT_ORDER
} from '../actions'


function categories (state = [], action){


    switch(action.type) {
    
          case GET_CATEGORIES:

              return action.categories
        default : 
        console.log('reducer default')
        return state
    }
}

function post (state = {}, action){


    switch(action.type){
      case GET_POST_BY_ID:
        return{
          ...state,
          ...action.post
        }
      default:
        return state
    }
}

function postOrder(state = '', action) {

    console.log(' --- reducer postOrder ' + state + ' ' + action.payload);

    switch (action.type) {
        case POST_SORT_ORDER:
            return action.payload
        default:
            return state;
    }
}

function posts (state = {} , action){


  switch(action.type) {
         case CREATE_POST:
          console.log('--- create post reducer');
          return {
            ... action.posts
          };

         case EDIT_POST:
           console.log('--- edit post reducer');
              return {
              ... action.posts
            }

        case GET_POSTS:
            return {
              ...state,
              ...action.posts
            }
        case GET_POSTS_BY_CAT:
            return {
              ... action.posts
            }
        default : 
          return state
  }
}

export default combineReducers({posts , categories, post, postOrder})