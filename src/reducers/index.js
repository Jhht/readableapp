
import {combineReducers} from 'redux'
import {objectFromArray} from '../utils/helpers'


import {
    GET_POSTS,
    GET_CATEGORIES,
    GET_POSTS_BY_CAT,
    CREATE_POST,
    EDIT_POST,
    GET_POST_BY_ID,
    POST_SORT_ORDER,
    VOTE_POST,
    GET_POST_COMMENTS,
    CREATE_COMMENT,
    EDIT_COMMENT
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
      case VOTE_POST:
        console.log(' reduccer VOTE_POST');
        return{
          ...state,
          ...action.post
        }
      default:
        return state
    }
}

function postOrder(state = { sortBy : ''} , action) {


    switch (action.type) {
        case POST_SORT_ORDER:
            return state.sortType.sortBy
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

function comments (state = [], action){

  console.log(' --- reducer comments ' + JSON.stringify(state )+ ' ACTYION: ' + JSON.stringify(action ));


  switch(action.type) {
        case GET_POST_COMMENTS:
            return {
              ...state,
              ...action.data
            }
        case CREATE_COMMENT:
          return{
              ...state,
              [action.data.id]: action.data
          }
        case EDIT_COMMENT:
         console.log('--- edit post reducer');
             return {
              ...state,
              ...action.data
            }
        default : 
          return state
  }

}

export default combineReducers({posts , categories, post, postOrder, comments})