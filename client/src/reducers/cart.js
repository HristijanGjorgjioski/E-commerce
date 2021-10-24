import { ADD_TO_CART } from '../constants/actionTypes'

const cartReducer = (state = { products: [], cart: [], currentItem: null }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                ? state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                : [...state.cart, { ...item, qty: 1 }],
            };
        
        default:
            return state;
    }
}
