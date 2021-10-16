import React, { useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../../../actions/product'
import Product from './Product/Product'
import useStyles from './styles'

const ListAllProducts = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const { products, isLoading } = useSelector((state) => state.productReducer)

    console.log(products, isLoading, 'LISTALL')

    if(!products.length && !isLoading) return 'No products'

    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {products?.map((product) => (
                    <Grid key={product._id} item xs={12} md={6} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default ListAllProducts
