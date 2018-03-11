
import { reducer as formReducer } from 'redux-form';
import {combineReducers} from 'redux'
import { fetchCategories , fetchAllPosts} from '../utils/api'
import {objectFromArray} from '../utils/helpers'

import {
    GET_POSTS,
    GET_CATEGORIES,
    GET_POSTS_BY_CAT,
    CREATE_POST
} from '../actions'


function categories (state = [], action){

    console.log(' --- reducer categories' + state);

    switch(action.type) {
    
          case GET_CATEGORIES:

              return action.categories
        default : 
        console.log('reducer default')
        return state
    }
}

function posts (state = {} , action){

	console.log(' --- reducer posts' + state);

	switch(action.type) {
         case CREATE_POST:
          console.log('--- create post reducer');
          return {
            ...state,
            [action.data.id]: action.data
          };

        case GET_POSTS:
            console.log(' --- GET_POSTS '  + state, action.posts);
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

export default combineReducers({posts , categories })