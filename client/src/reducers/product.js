import * as actionType from '../constants/actionTypes'

const productReducer = (state = { isLoading: true, products: [] }, action) => {
    switch (actionType) {
        case actionType.START_LOADING:
            return { ...state, isLoading: true };
        case actionType.END_LOADING:
            return { ...state, isLoading: false };
        case actionType.FETCH_ALL:
            return { ...state, products: action.payload.data }
        case actionType.CREATE_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        default:
            return state;
    }
}

export default productReducer
