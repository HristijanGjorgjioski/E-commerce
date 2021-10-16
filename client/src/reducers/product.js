import { CREATE_PRODUCT, END_LOADING, FETCH_ALL, START_LOADING } from '../constants/actionTypes'

const productReducer = (state = { isLoading: true, products: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return { ...state, products: action.payload.data }
        case CREATE_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        default:
            return state;
    }
}

export default productReducer
