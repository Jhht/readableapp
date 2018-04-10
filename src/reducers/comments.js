import _  from 'lodash'
import {combineReducers} from 'redux'
import {objectFromArray , arrayFromObject} from '../utils/helpers'


import {
    GET_POST_COMMENTS,
    CREATE_COMMENT,
    EDIT_COMMENT, 
    DELETE_POST,
    VOTE_COMMENT,
    DELETE_COMMENT
} from '../actions/comment'

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
        case DELETE_COMMENT:
            return arrayState.filter(comment => comment.id !== action.data.id)
        default : 
          return state
  }

}

export default comments
