import axios from 'axios'
import { ADD_TO_CART, END_LOADING, REMOVE_FROM_CART, START_LOADING } from '../constants/actionTypes'

export const addToCart = (item) => async (dispatch, getState) => {
    try {
        dispatch({ type: START_LOADING })

        dispatch({ type: ADD_TO_CART, payload: { item } })

        dispatch({ type: END_LOADING })
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
