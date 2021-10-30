import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CardMedia, Container, Typography } from '@material-ui/core';

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
        <Container className={''}>
            <CardMedia className="card-media">
                <img src={product?.imageUrl} alt={product.title} />
            </CardMedia>
            <div className="product-info">
                <Typography component="h5">{product.title}</Typography>
                <p className="item-price"><b>${product.price}.00</b></p>
                {/* <p className="item-desc">{product.desc}</p> */}
                <br></br>
                <div>
                    <p className="item-size-text">SIZE</p>
                    <p className="item-size-star">*</p>
                    <p className="item-size-selected">{product.size}</p>
                </div>
                <br></br>
                <button className="btn-add"><b>ADD TO CART</b></button>
            </div>
        </Container>
    )
}

export default ProductDetails;
