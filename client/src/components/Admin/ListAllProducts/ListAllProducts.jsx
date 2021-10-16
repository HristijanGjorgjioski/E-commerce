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

    // console.log(products, isLoading, 'LISTALL')

    if(!products.length && !isLoading) return 'No products'

    return (
        isLoading ? <CircularProgress /> : (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={'onAddToCart'} />
                        </Grid>
                    ))}
                </Grid>
            </main>
        )
    )
}

export default ListAllProducts