import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes'

const productsArray = [];
productsArray.push(JSON.parse(window.sessionStorage.getItem('products')))
console.log(productsArray)
const cartReducer = (state = { products: productsArray, cart: [], currentItem: null }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Great Item data from products array
            // const item = state.products.find(
            //     (product) => product._id === action.payload.id
            // );
            const item = state.products.find((product) => {
                return product._id === action.payload.id
            });
            // const item = []
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );
            console.log(state.cart)

            const cartLength = state.cart.length;

            return {
                ...state,
                cartLength,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                        )
                    : [...state.cart, { ...item, qty: 1 }],
            }
            
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        default:
            return state;
    }
}

export default cartReducer
