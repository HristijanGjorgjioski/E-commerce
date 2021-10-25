import React from 'react'
import { useSelector } from 'react-redux'

import useStyles from './styles'

const CartItem = () => {
    const classes = useStyles()

    const { cart } = useSelector((state) => state.cartReducer)

    return (
        <div>
            {cart.map((item) => (
                <h1>{item.title}</h1>
            ))}        
        </div>
    )
}

export default CartItem
