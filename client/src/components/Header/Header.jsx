import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Box } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/commerce.png'
import admin from '../../assets/admin.png'
import useStyles from './styles'

const Header = () => {
  const user= JSON.parse(localStorage.getItem('profile'))
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const classes = useStyles()
  const location = useLocation()

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)

  const mobileMenuId = 'primary-search-account-menu-mobile'

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  )

  const adminMenu = (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography component={Link} to="/" variant="h6" className={classes.title} style={{ textDecoration: 'none' }} color="inherit">
          <img src={admin} alt="gjorgjioski admin" height="25px" className={classes.image} /> Admin
        </Typography>
      </Toolbar>
    </AppBar>
  )

  return (
      <>
        {user ? (
          adminMenu
        ) : (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" className={classes.title} style={{ textDecoration: 'none' }} color="inherit">
              <img src={logo} alt="gjorgjioski commerce" height="25px" className={classes.image} /> Commerce.js
            </Typography>
            <div className={classes.grow} />
            {location.pathname === '/' && (
              <div className={classes.button}>
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                  <Badge badgeContent={6} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
        )}
        {renderMobileMenu}
      </>
  )
}

export default Header
