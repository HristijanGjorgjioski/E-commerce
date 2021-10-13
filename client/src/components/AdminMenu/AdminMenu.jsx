import React, { useState } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { ExitToApp, ListAlt, PersonAdd, PostAdd } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import useStyles from './styles'
import * as actionType from '../../constants/actionTypes'

const AdminMenu = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const logout = () => {
        dispatch({ type: actionType.LOGOUT })
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <div className={classes.mainDiv}>
                <Typography variant="h6"><PersonAdd /><Link to='/addadmin' className={classes.linkText}> Add Admin</Link></Typography>
                <Typography variant="h6"><ListAlt /><Link to='/allproducts' className={classes.linkText}> List All Products</Link></Typography>
                <Typography variant="h6"><PostAdd /><Link to='/addproduct' className={classes.linkText}> Add Product</Link></Typography>
                <Typography variant="h6"><ExitToApp /><Link to='/' className={classes.linkText}> Logout</Link></Typography>
            </div>
        </Paper>
    )
}

export default AdminMenu
