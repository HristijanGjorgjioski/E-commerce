import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import logo from '../../assets/commerce.png'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()

  return (
      <>
        <AppBar position='fixed' className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
              <img src={logo} alt="gjorgjioski e-commerce" height="25px" className={classes.image} /> Gjorgjioski E-commerce
            </Typography>
          </Toolbar>
        </AppBar>
      </>
  )
}

export default Header
