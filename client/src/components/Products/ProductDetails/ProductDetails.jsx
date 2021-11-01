import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CardMedia, Container, Paper, Typography } from '@material-ui/core';

import { getProduct } from '../../../actions/product';
import useStyles from './styles'

const ProductDetails = () => {
    const { product, products, isLoading } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const { id } = useParams();
    const classes = useStyles()
    
    useEffect(async () => {
        await dispatch(getProduct(id));
    }, [id]);
    
    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div className={classes.imageSection}>
                <img className={classes.media} src={product?.imageUrl} alt={product.title} />
            </div>
            <div className={classes.section}>
            <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        ${product.price}
                    </Typography>
                    <Typography variant="body1" component="h5">
                        Gender: {product.gender}
                    </Typography>
                    <Typography variant="body1" component="h2">
                        Collection: {product.selection}
                    </Typography>
            </div>
        </Paper>
    )
}

export default ProductDetails;
