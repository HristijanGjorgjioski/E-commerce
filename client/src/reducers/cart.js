import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes'

const products = JSON.parse(window.sessionStorage.getItem('products'))
const cartReducer = (state = { products, cart: [], currentItem: null }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.data.find((product) => {
                return product._id === action.payload.item._id
            });
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item._id === action.payload.item._id ? true : false
            );

            const totalPrice = state.cart.reduce((acc, curr) => acc + curr.price*curr.qty, 0);

            return {
                ...state,
                totalPrice,
                cart: inCart
                    ? state.cart.map((item) =>
                        item._id === action.payload.item._id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                        )
                    : [...state.cart, { ...item, qty: 1 }],
            }
            
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload._id),
            };
        default:
            return state;
    }
}

export default cartReducer
