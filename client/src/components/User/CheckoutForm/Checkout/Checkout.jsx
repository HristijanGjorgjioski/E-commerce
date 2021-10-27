import { Container, Divider, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const stripeKey = 'pk_test_51Jp641H0InCzdo9oA9wVFxxUJHr00z3c5qLc2rvDGCiAZy4qMXDpZP3TN8EiHmyQ0b7kBCXepDKrFooKDF4pKbni00ZeSC1PW2'
toast.configure()

const Checkout = () => {
    const { cart } = useSelector((state) => state.cartReducer)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price*curr.qty, 0);

    const handleToken = (token, addresses) => {
        console.log({ token, addresses })
        toast.success('Success! Your order will come to you soon!')
    }

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography>Checkout Page</Typography>
            <Typography>Thank you for your loyality!</Typography>
            <Divider />
            <StripeCheckout 
                stripeKey={stripeKey}
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
            />
        </Container>
    )
}

export default Checkout
