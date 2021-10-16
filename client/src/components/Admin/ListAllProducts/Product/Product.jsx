import React from 'react'
import { Card, ButtonBase, CardMedia, Typography, Button } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product }) => {
    console.log(product)
    const classes = useStyles()
    
    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                component="span"
                name="name"
                className={classes.cardAction}
                onClick={''}
            >
                <CardMedia className={classes.media} image={product.imageUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{product.title}</Typography>
                </div>
                    <div className={classes.overlay2} name="edit">
                        <Button
                            onClick={(e) => {
                            e.stopPropagation();
                            // setCurrentId(post._id);
                            }}
                            style={{ color: 'white' }}
                            size="small"
                        >
                        <MoreHoriz fontSize="default" />
                    </Button>
                </div>
            </ButtonBase>
        </Card>
    )
}

export default Product
