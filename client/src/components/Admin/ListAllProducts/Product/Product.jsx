import React from 'react'
import { Card, ButtonBase, CardMedia, Typography, Button, CardContent } from '@material-ui/core'
// import { MoreHoriz } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product }) => {
    console.log(product)
    const classes = useStyles()
    
    return (
        <Card className={classes.root} raised elevation={6}>
            <CardMedia className={classes.media} image={product.imageUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.title} />
            <CardContent>
                
            </CardContent>
        </Card>
    )
}

export default Product
