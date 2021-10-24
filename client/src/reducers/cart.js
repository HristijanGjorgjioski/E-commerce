import { ADD_TO_CART } from '../constants/actionTypes'

const cartReducer = (state = { products: [], cart: [], currentItem: null }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
    
        default:
            return state;
    }
}
