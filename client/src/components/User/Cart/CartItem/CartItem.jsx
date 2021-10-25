import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import { RemoveShoppingCart, AddShoppingCart } from '@material-ui/icons'

import { addToCart, removeFromCart } from '../../../../actions/cart'
import useStyles from './styles'

const CartItem = () => {
    const classes = useStyles()

    const { cart } = useSelector((state) => state.cartReducer)

    const cartItems = cart.map((item) => {
        return (
            <Card key={item._id} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">{item.title}</Typography>
                    <Typography color="textSecondary">{item.selection}</Typography>
                    <Typography color="textSecondary">Size: {item.size}</Typography>
                    <Typography color="textSecondary">Price: {item.price}</Typography>
                    <Typography variant="body2" component="p">{item.qty}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => addToCart(item)}><AddShoppingCart color="primary" /></Button>
                    <Button size="small" onClick={() => removeFromCart(item._id)}><RemoveShoppingCart color="secondary" /></Button>
                </CardActions>   
            </Card>
        );
    });

    return (
        <div>
            {cartItems}        
        </div>
    )
}

export default CartItem
