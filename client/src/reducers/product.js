import * as actionType from '../constants/actionTypes'

const productReducer = (state = { isLoading: true, posts: [] }, action) => {
    switch (actionType) {
        case actionType.CREATE_PRODUCT:
            return { ...state, posts: [...state.posts, action.payload] }
        default:
            return state
    }
}

export default productReducer
