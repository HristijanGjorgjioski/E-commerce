import React, { useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../../../actions/product'
import Product from './Product/Product'
import useStyles from './styles'

const Products = ({ setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const { products, isLoading } = useSelector((state) => state.productReducer)

    if(!products.length && !isLoading) return 'No products'

    return (
        isLoading ? <CircularProgress /> : (
            <Grid container className={classes.container} justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={'onAddToCart'} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Products
