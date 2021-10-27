import React from 'react'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

const stripeKey = 'pk_test_51Jp641H0InCzdo9oA9wVFxxUJHr00z3c5qLc2rvDGCiAZy4qMXDpZP3TN8EiHmyQ0b7kBCXepDKrFooKDF4pKbni00ZeSC1PW2'

const handleToken = (token, addresses) => {
    console.log({ token, addresses })
}

const Checkout = () => {
    const { totalPrice } = useSelector((state) => state.cartReducer)
    console.log(totalPrice)

    return (
        <div>
            <StripeCheckout 
                stripeKey={stripeKey}
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice}
            />
        </div>
    )
}

export default Checkout
