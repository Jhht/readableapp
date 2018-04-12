import _  from 'lodash'
import { arrayFromObject} from '../utils/helpers'


import {
    GET_POSTS,
    CREATE_POST,
    EDIT_POST,
    VOTE_POST, 
    GET_POSTS_BY_CAT,
    DELETE_POST
} from '../actions/post'

function posts (state = { } , action){


  switch(action.type) {

         case CREATE_POST:
          return {
            ...state,
            ...action.posts
          };

         case EDIT_POST:
              return {
              ...action.posts
            }

        case GET_POSTS:
            return {
              ...state,
              ...action.posts
            }
        case GET_POSTS_BY_CAT:
            return {
              ...action.posts
            }
         case DELETE_POST:
          const arrayStateDel = arrayFromObject(  state);
          const delIndex = _.findIndex(arrayStateDel,o=>o.id === action.data.id);


           return{
            ...state,
            [delIndex]: action.data
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

export default posts