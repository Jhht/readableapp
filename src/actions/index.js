import { fetchCategories , fetchAllPosts, fetchPostsByCategory, createPostAPI, fetchPostById, editPostAPI } from '../utils/api'
import api from '../utils/api'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_BY_CAT = 'GET_POSTS_BY_CAT'
export const GET_POST_BY_ID = 'GET_POST_BY_ID'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const CREATE_POST = 'CREATE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'
export const POST_SORT_ORDER = 'POST_SORT_ORDER'



//--------- Category actions

export const getAllCategories = () => dispatch => (
  fetchCategories().
    then(
      categories => {
        console.log('api categories ' + categories)
            dispatch({
              type: GET_CATEGORIES,
              categories           
            })
      })
)

//-------- Posts actions


export const getPosts = () => dispatch => (
  fetchAllPosts()
    .then(
      posts => {
            console.log('api posts ' + posts)
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
           console.log('api posts id ' + JSON.stringify(post))

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
            console.log('api posts create' + JSON.stringify(data))
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
            console.log('api posts create' + JSON.stringify(data))
            dispatch({
              type: EDIT_POST,
              data           
            })
          })
)

export function voteForPost(id, vote) {
    
}

export function postSortOrder(sortType) {

    return {
        type: POST_SORT_ORDER,
        payload: sortType
    }
}





















