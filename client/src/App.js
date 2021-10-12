import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminMenu from './components/AdminMenu/AdminMenu'

import Header from './components/Header/Header'
import Login from './components/Login/Login'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <Router>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CssBaseline />
        <Header />
        {user ? (
          <Switch>
            <Route exact path="/">
              <AdminMenu />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
          )}
      </div>
    </Router>
  )
}

export default App
