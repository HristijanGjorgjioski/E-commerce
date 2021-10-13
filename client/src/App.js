import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddAdmin from './components/Admin/AddAdmin/AddAdmin'
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
          <Switch>
            <Route exact path="/">
              <br /> <br /> <h1>HOME USER</h1>
            </Route>
            <Route exact path="/admin">
              <AdminMenu />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App
