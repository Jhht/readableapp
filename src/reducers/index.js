import {combineReducers} from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import post from './post'
import postOrder from './postOrder'


export default combineReducers({categories, posts, comments, post, postOrder})
