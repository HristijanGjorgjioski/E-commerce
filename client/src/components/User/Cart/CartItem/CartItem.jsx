import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from '@material-ui/core'
import { RemoveShoppingCart, AddShoppingCart } from '@material-ui/icons'

import { addToCart, removeFromCart } from '../../../../actions/cart'
import useStyles from './styles'

const CartItem = () => {
    const classes = useStyles()
    const { cart } = useSelector((state) => state.cartReducer)

    const cartItems = cart.map((item) => {
        return (
            <Card className="cart-item">
                <CardMedia image={item.imageUrl} alt={item.title} className={classes.media} />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography variant="h5">${item.price}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>&nbsp;{item.qty}&nbsp;</Typography>
                    <Button type="button" size="small">+</Button>
                    </div>
                    <Button variant="contained" type="button" color="secondary">Remove</Button>
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
