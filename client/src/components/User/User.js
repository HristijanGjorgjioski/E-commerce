import React from 'react'

import Header from '../Header/Header'
import Products from '../Admin/Products/Products'
import SearchForm from '../SearchForm/SearchForm'

const User = () => {
    return (
        <div>
            <Header />
            <SearchForm />
            <Products />
        </div>
    )
}

export default User
