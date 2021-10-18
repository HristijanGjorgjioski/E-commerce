import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom'

import logo from '../../assets/commerce.png'
import admin from '../../assets/admin.jpg'
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()

  const logout = () => {
    dispatch({ type: LOGOUT })
    history.push('/')
    setUser(null)
  }

  const adminMenu = (
    <AppBar position="static" className={classes.appBar} color="inherit">
        <Link to="/admin" className={classes.brandContainer}>
          <img src={admin} alt="gjorgjioski admin" height="25px" className={classes.image} />
        </Link>
        <Toolbar className={classes.toolbar}>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
        </Toolbar>
    </AppBar>
  )

  const userMenu = (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
          <img src={logo} alt="gjorgjioski commerce" height="25px" className={classes.image} />
      </Link>
      <Toolbar className={classes.toolbar}>
        <Badge style={{ marginRight: '15px' }} badgeContent={2} color="secondary">
          <ShoppingCart />
        </Badge>
        <Button component={Link} to="/login" variant="contained" color="primary">Admin</Button>
      </Toolbar>
    </AppBar>
  )

  return (
      <>
        {!user?.result ? (
          userMenu
        ) : (
          adminMenu
        )}
      </>
  )
}

export default Header
