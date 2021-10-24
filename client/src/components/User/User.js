import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Products from '../Admin/Products/Products'
import FilterForm from './FilterForm/FilterForm'
import Cart from './Cart/Cart'

const User = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FilterForm />
            </div>
            <Products />
            <Route path="/cart" exact>
                <Cart />
            </Route>
        </div>
    )
}

export default User
