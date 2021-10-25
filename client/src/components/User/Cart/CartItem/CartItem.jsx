import React from 'react'
import { useSelector } from 'react-redux'

const CartItem = () => {
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
