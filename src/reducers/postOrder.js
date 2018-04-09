import {
    POST_SORT_ORDER,
} from '../actions/post'

function postOrder(state = { sortBy : 'voteScore'} , action) {
 
    switch (action.type) {
        case POST_SORT_ORDER:
            return action.sortType.sortBy
        default:
            return state;
    }
}

expoort default postOrder



