import {
    editCommentAPI, fetchPostComments, 
    createCommentAPI,
    voteCommentAPI, 
    deleteCommentAPI} from '../utils/api'
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

export const getPostComments = (postId) => dispatch => (
  fetchPostComments( postId)
  .then(
      data => {
            dispatch({
              type: GET_POST_COMMENTS,
              data           
            })
          })

)

export const createComment = ( comment ) => dispatch => (
  createCommentAPI( comment )
     .then(
      data => {
            dispatch({
              type: CREATE_COMMENT,
              data           
            })
          })
)

export const editComment = ( comment ) => dispatch => (
  editCommentAPI( comment )
     .then(
      data => {
            dispatch({
              type: EDIT_COMMENT,
              data           
            })
          })
)



export const deleteComment = ( id ) => dispatch => (
  deleteCommentAPI( id )
     .then(
      data => {
            dispatch({
              type: DELETE_COMMENT,
              data           
            })
          })
)

export const voteForComment = (comment, vote) => dispatch => (
     voteCommentAPI( comment, vote )
     .then(
      data => {
            dispatch({
              type: VOTE_COMMENT,
              data           
            })
          })
)
