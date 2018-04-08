import _  from 'lodash'
import {combineReducers} from 'redux'
import {objectFromArray , arrayFromObject} from '../utils/helpers'


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
    EDIT_COMMENT, 
    DELETE_POST,
    VOTE_COMMENT
} from '../actions'


function categories (state = [], action){


    switch(action.type) {
    
          case GET_CATEGORIES:

              return action.categories
        default : 
        return state
    }
}

function post (state = {}, action){


    switch(action.type){
      case GET_POST_BY_ID:
        return{
          ...action.post
        }
     
 
      default:
        return state
    }
}

function postOrder(state = { sortBy : 'voteScore'} , action) {
 
    switch (action.type) {
        case POST_SORT_ORDER:
            return action.sortType.sortBy
        default:
            return state;
    }
}

function posts (state = {} , action){


  switch(action.type) {
         case CREATE_POST:
          return {
            ...state,
            ... action.posts
          };

         case EDIT_POST:
           console.log('--- edit post reducer ' + JSON.stringify(state) + ' ' + JSON.stringify(action));
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
         case DELETE_POST:
            return {
              ... action.posts
            }

        case VOTE_POST:

          const arrayState = arrayFromObject(  state);

          const voteIndex = _.findIndex(arrayState,o=>o.id === action.data.id);


           return{
            ...state,
            [voteIndex]: action.data
          }
        default : 
          return state
  }
}

function comments (state = [], action){


  const arrayState = arrayFromObject(  state);

  switch(action.type) {

        case GET_POST_COMMENTS:
            return {
              ...state,
              ...action.data
            }
        case CREATE_COMMENT:

          arrayState.push(action.data)
          return{
              ...arrayState
          }
        case EDIT_COMMENT:
          console.log('--- edit comment reducer');
           
           const voteIndexEdit = _.findIndex(arrayState,o=>o.id === action.data.id);

          
               return{
                ...state,
                [voteIndexEdit]: action.data
              }
        case VOTE_COMMENT:

           const voteIndex = _.findIndex(arrayState,o=>o.id === action.data.id);

           return{
            ...state,
            [voteIndex]: action.data
          }
        default : 
          return state
  }

}

export default combineReducers({posts , categories, post, postOrder, comments})