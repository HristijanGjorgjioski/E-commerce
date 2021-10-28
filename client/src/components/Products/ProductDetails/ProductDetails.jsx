import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProduct } from '../../../actions/product';

const ProductDetails = () => {
    const { product, products, isLoading } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct(id));
      }, [id]);

    return (
        <div>
            ProductDetails
        </div>
    )
}

export default ProductDetails
