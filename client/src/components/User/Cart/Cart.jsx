import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Button, Container, Grid, Typography } from '@material-ui/core';

import CartItem from './CartItem/CartItem'
import useStyles from './styles'

const Cart = () => {
    const classes = useStyles()
    const { cart } = useSelector((state) => state.cartReducer)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price*curr.qty, 0)
    
      return (
        <Container>
          <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
          <CartItem />
        </Container>
      );
}

export default Cart
