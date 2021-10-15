import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../actions/product'

const ListAllProducts = () => {
    // const { products, isLoading } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    // if(!products.length && !isLoading) return 'No products'

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div>

        </div>
    )
}

export default ListAllProducts
