import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Checkbox, FormControl, FormControlLabel, Paper, Typography } from '@material-ui/core';

import { getProduct } from '../../../actions/product';
import useStyles from './styles'
import { addToCart } from '../../../actions/cart';

const ProductDetails = () => {
    const { product, products, isLoading } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const { id } = useParams();
    const classes = useStyles()
    
    useEffect(async () => {
        await dispatch(getProduct(id));
    }, [id]);
    
    return (
        <Paper className={classes.paper} elevation={6}>
            <div className={classes.imageSection}>
                <img className={classes.media} src={product?.imageUrl} alt={product?.title} />
            </div>
            <div className={classes.section}>
                <Typography gutterBottom variant="h5" component="h2">
                    {product?.title}
                </Typography>
                <Typography variant="body1" component="h5">
                    Gender: {product?.gender}
                </Typography>
                <Typography variant="body1" component="h2">
                    Collection: {product?.selection}
                </Typography>
                    <Typography variant="body1" component="h2">
                        Available sizes:
                    </Typography>
                <FormControl>
                    {product?.size?.map((s) =>
                            <FormControlLabel
                                style={{ flex: '1 0 21%' }}
                                key={s}
                                label={s}
                                value={s}
                                control={<Checkbox />}
                            />
                        )}
                </FormControl>
                <Button className={classes.btnAddToCart} variant="outlined" color="inherit" onClick={() => dispatch(addToCart(product))}>
                    Add to cart - ${product?.price}
                </Button>
            </div>
        </Paper>
    )
}

export default ProductDetails;
