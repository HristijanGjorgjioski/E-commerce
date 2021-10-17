import { Container } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Admin from './components/Admin/Admin'

import Header from './components/Header/Header'
import Login from './components/Login/Login'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const App = () => {
  return (
    <Router>
      <Container max="x1">
        <Header />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Switch>
              <PrivateRoute component={Admin} exact path="/admin" />
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
        </div>
      </Container>
    </Router>
  )
}

export default App
