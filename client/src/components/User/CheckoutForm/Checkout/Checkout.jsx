import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const stripeKey = 'pk_test_51Jp641H0InCzdo9oA9wVFxxUJHr00z3c5qLc2rvDGCiAZy4qMXDpZP3TN8EiHmyQ0b7kBCXepDKrFooKDF4pKbni00ZeSC1PW2'

const handleToken = () => {

}

const Checkout = () => {
    return (
        <div>
            <StripeCheckout 
                stripeKey={stripeKey}
                token={handleToken}
            />
        </div>
    )
}

export default Checkout
