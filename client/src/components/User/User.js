import React from 'react'

import Header from '../Header/Header'
import Products from '../Admin/Products/Products'
import FilterForm from '../FilterForm/FilterForm'

const User = () => {
    return (
        <div>
            <Header />
            <FilterForm />
            <Products />
        </div>
    )
}

export default User
