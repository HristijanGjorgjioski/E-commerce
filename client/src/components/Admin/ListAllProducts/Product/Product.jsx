import React from 'react'
import { Card, CardMedia, Typography, CardActions, CardContent, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product }) => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()

    const handleAddToCart = () => {}
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.imageUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.title} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        ${product.price}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
