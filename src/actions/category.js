import { fetchCategories 
      , fetchAllPosts
      , fetchPostsByCategory
      , createPostAPI , editCommentAPI, fetchPostById, editPostAPI, votePostAPI, fetchPostComments
      , createCommentAPI,
      deletePostAPI ,voteCommentAPI, 
    deleteCommentAPI} from '../utils/api'
import api from '../utils/api'


export const GET_CATEGORIES = 'GET_CATEGORIES'


export const getAllCategories = () => dispatch => (
  fetchCategories().
    then(
      categories => {
            dispatch({
              type: GET_CATEGORIES,
              categories           
            })
      })
)
