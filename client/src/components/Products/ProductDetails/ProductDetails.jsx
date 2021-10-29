import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

import { getProduct } from '../../../actions/product';

const ProductDetails = () => {
    const { product, products, isLoading } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct(id));
      }, [id]);

    return (
        <Container>
            <div>

            </div>
        </Container>
    )
}

export default ProductDetails;
