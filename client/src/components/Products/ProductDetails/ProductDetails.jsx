import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { getProduct } from '../../../actions/product';

const ProductDetails = () => {
    const { product, products, isLoading } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const { id } = useParams();

    
    useEffect(() => {
        dispatch(getProduct(id));
        console.log(product)
    }, [id]);
    
    return (
        <Container>
            <div>
                {/* <h1>{product.title}</h1> */}
            </div>
        </Container>
    )
}

export default ProductDetails;
