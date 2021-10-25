import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardContent, Typography, CardActions, Button, CardMedia, IconButton } from '@material-ui/core'
import { RemoveShoppingCart, AddShoppingCart } from '@material-ui/icons'

import { addToCart, removeFromCart } from '../../../../actions/cart'
import useStyles from './styles'

const CartItem = ({ item }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className="cart-item">
            <CardMedia image={item.imageUrl} alt={item.title} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="h5">${item.price}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                <IconButton type="button" size="small" color="secondary">
                    <RemoveShoppingCart />
                </IconButton>
                <Typography>&nbsp;{item.qty}&nbsp;</Typography>
                <IconButton type="button" size="small" color="primary" onClick={() => dispatch(addToCart(item))}>
                    <AddShoppingCart />
                </IconButton>
                </div>
                {/* <Button variant="contained" type="button" color="secondary">Remove</Button> */}
            </CardActions>
        </Card>
    )
}

export default CartItem
