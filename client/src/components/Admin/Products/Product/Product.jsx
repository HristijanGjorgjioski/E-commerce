import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Card, CardMedia, Typography, CardActions, CardContent, IconButton, Button } from '@material-ui/core'
import { AddShoppingCart, Delete, Edit } from '@material-ui/icons'
import { useDispatch } from 'react-redux';

import useStyles from './styles'
import { deleteProduct } from '../../../../actions/product';
import { addToCart } from '../../../../actions/cart';

const Product = ({ product, setCurrentId }) => {
    const [qty, setQty] = useState(0)
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch();
    const classes = useStyles()

    const addToCartHandler = () => {
        // setQty(qty + 1)
        // history.pushState(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.imageUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.title} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        ${product.price}
                    </Typography>
                    <Typography variant="body1" component="h5">
                        Size: {product.size}
                    </Typography>
                    <Typography variant="body1" component="h5">
                        Gender: {product.gender}
                    </Typography>
                    <Typography variant="body1" component="h2">
                        Collection: {product.selection}
                    </Typography>
                </div>
            </CardContent>
            {user ? (
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Delete Product" onClick={() => dispatch(deleteProduct(product._id))}>
                        <Delete color="secondary" />
                    </IconButton>
                    <Button 
                        aria-label="Edit Product" 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            setCurrentId(product._id)
                        }}
                    >
                        <Edit color="primary" />
                    </Button>
                </CardActions>
            ) : (
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => dispatch(addToCart(product))}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            )}
        </Card>
    )
}

export default Product
