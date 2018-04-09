import {  
    GET_POST_BY_ID,
} from '../actions/post'

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

export default post
