import {  } from '../constants/actionTypes'

export const addToCart = (itemID) => {
    return {
      type: ADD_TO_CART,
      payload: {
        id: itemID,
      },
    };
};

export const removeFromCart = (itemID) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};
