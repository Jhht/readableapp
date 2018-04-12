import { fetchAllPosts
      , fetchPostsByCategory
      , createPostAPI , fetchPostById, editPostAPI, votePostAPI,
      deletePostAPI } from '../utils/api'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_BY_CAT = 'GET_POSTS_BY_CAT'
export const GET_POST_BY_ID = 'GET_POST_BY_ID'
export const CREATE_POST = 'CREATE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'
export const POST_SORT_ORDER = 'POST_SORT_ORDER'
export const DELETE_POST = 'DELETE_POST'

export const getPosts = () => dispatch => (
  fetchAllPosts()
    .then(
      posts => {
            dispatch({
              type: GET_POSTS,
              posts           
            })
          })
)

export const getPostsByCategory = ( category ) => dispatch => (
    fetchPostsByCategory( category )
     .then(
      posts => {
            dispatch({
              type: GET_POSTS_BY_CAT,
              posts           
            })
          })
)

export const getPostById= ( id ) => dispatch => (
    fetchPostById( id )
     .then(
      post => {

            dispatch({
              type: GET_POST_BY_ID,
              post           
            })
          })
)

export const createPost = ( post ) => dispatch => (
  createPostAPI( post )
     .then(
      data => {
            dispatch({
              type: CREATE_POST,
              data           
            })
          })
)

export const editPost = ( post ) => dispatch => (
  editPostAPI( post )
     .then(
      data => {
            dispatch({
              type: EDIT_POST,
              data           
            })
          })
)

export const deletePost = ( id ) => dispatch => (
  deletePostAPI( id )
     .then(
      data => {
            dispatch({
              type: DELETE_POST,
              data           
            })
          })
)

export const voteForPost = (post, vote) => dispatch => (
     votePostAPI( post, vote )
     .then(
      data => {
            dispatch({
              type: VOTE_POST,
              data           
            })
          })
)

export function postSortOrder(sortType) {

    return {
        type: POST_SORT_ORDER,
        sortType
    }
}
