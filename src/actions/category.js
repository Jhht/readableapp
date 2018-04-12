import { fetchCategories } from '../utils/api'


export const GET_CATEGORIES = 'GET_CATEGORIES'


export const getAllCategories = () => dispatch => (
  fetchCategories().then(
      categories => {
            dispatch({
              type: GET_CATEGORIES,
              categories           
            })
      })
)
