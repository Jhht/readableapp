import {
    GET_CATEGORIES
} from '../actions/category'


function categories (state = [], action){


    switch(action.type) {
    
          case GET_CATEGORIES:
              return action.categories
        default : 
        return state
    }
}
export default categories