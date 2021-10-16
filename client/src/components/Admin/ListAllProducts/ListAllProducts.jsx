import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../actions/product'

const ListAllProducts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const { products, isLoading } = useSelector((state) => state.productReducer)

    console.log(useSelector((state) => state))
    console.log(products, isLoading, 'LISTALL')
    if(!products.length && !isLoading) return 'No products'


    return (
        <div>
            <div>
                {products?.map((product) => (
                    <h1 key={product.id}>{product.title}</h1>
                ))}
            </div>
        </div>
    )
}

export default ListAllProducts
