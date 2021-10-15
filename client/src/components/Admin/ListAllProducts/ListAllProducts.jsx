import React from 'react'
import { useSelector } from 'react-redux'

const ListAllProducts = () => {
    const { products, isLoading } = useSelector((state) => state.productReducer)
    console.log(useSelector((state) => state.productReducer))
    console.log(products, isLoading, 'LISTALL')
    // if(!products.length && !isLoading) return 'No products'

    return (
        <div>

        </div>
    )
}

export default ListAllProducts
