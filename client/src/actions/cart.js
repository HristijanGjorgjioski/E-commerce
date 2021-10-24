import axios from 'axios'
import { ADD_TO_CART, END_LOADING, REMOVE_FROM_CART, START_LOADING } from '../constants/actionTypes'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products(${id})`)

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

export const removeFromCart = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id,
        })
        
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log(error)
    }
};
