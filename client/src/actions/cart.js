import * as api from '../api/index'
import { ADD_TO_CART, END_LOADING, REMOVE_FROM_CART, START_LOADING } from '../constants/actionTypes'

export const addToCart = (itemID) => async (dispatch) => {
    const { data } = await api.getProducts();

    try {
        dispatch({
            type: ADD_TO_CART,
            payload: {
              product: data._id,
              name: data.name,
              image: data.image,
              price: data.price,
              countInStock: data.countInStock,
              qty,
            },
        })
        
          localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log(error)
    }
};

export const removeFromCart = (itemID) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        dispatch({ type: REMOVE_FROM_CART, payload: { id: itemID } })

        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
};
