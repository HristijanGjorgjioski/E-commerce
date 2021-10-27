import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Admin from './components/Admin/Admin'
import User from './components/User/User'

import Header from './components/Header/Header'
import Login from './components/Login/Login'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Cart from './components/User/Cart/Cart'
import Checkout from './components/User/CheckoutForm/Checkout/Checkout'

const App = () => {
  return (
    <Router>
      <Container max="x1">
            <Switch>
              <PrivateRoute component={Admin} exact path="/admin" />
              <Route exact path="/login">
                <Header />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Login />
                </div>
              </Route>
              <Route exact path="/">
                <User />
              </Route>
              <Route exact path="/cart">
                <Header />
                <Cart />
              </Route>
              <Route exact path="/checkout">
                <Header />
                <Checkout />
              </Route>
            </Switch>
      </Container>
    </Router>
  )
}

export default App
