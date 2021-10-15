import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../actions/product'

const ListAllProducts = () => {
    const { products, isLoading } = useSelector((state) => state.products)

    // if(!products.length && !isLoading) return 'No products'

    console.log(products, isLoading)
    return (
        <div>

        </div>
    )
}

export default ListAllProducts
