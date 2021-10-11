import React from 'react'
import { Link } from 'react-router-dom'

import useStyles from './styles'

const Header = () => {
  const classes = useStyles()

  return (
      <>
        <AppBar position={fixed} className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
              
            </Typography>
          </Toolbar>
        </AppBar>
      </>
  )
}

export default Header
