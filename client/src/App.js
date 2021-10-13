import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AddAdmin from './components/Admin/AddAdmin/AddAdmin'
import AddProduct from './components/Admin/AddProduct/AddProduct'
import AdminMenu from './components/AdminMenu/AdminMenu'

import Header from './components/Header/Header'
import Login from './components/Login/Login'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CssBaseline />
        <Header />
          <Switch>
            <PrivateRoute component={AdminMenu} exact path="/admin" />
            <PrivateRoute component={AddAdmin} exact path="/addadmin" />
            <PrivateRoute component={AddProduct} exact path="/addproduct" />
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App
