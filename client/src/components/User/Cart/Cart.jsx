import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Grid, Typography } from '@material-ui/core';

import CartItem from './CartItem/CartItem'
import useStyles from './styles'
import { emptyCart } from '../../../actions/cart';

const Cart = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cartReducer)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price*curr.qty, 0)

    const renderEmptyCart = () => (
      <Typography variant="subtitle1">You have no items in your shopping cart,
        <Link className={classes.link} to="/"> start adding some</Link>!
      </Typography>
    );

    const renderCart = () => (
      <>
        <Grid container spacing={3}>
          {cart.map((item) => (
            <Grid item xs={12} sm={4} key={item._id}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">Subtotal: ${totalPrice}</Typography>
          <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => dispatch(emptyCart())}>Empty cart</Button>
            <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
          </div>
        </div>
      </>
    );
    
    return (
      <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        { !cart.length ? renderEmptyCart() : renderCart() }
      </Container>
    );
}

export default Cart
