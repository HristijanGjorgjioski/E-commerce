import React, { useState } from 'react'
import { Button, Paper, Typography } from '@material-ui/core'
import { ListAlt, PersonAdd, PostAdd } from '@material-ui/icons'
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

        history.push('/')

        setUser(null)
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <div className={classes.mainDiv}>
                <Typography variant="h6"><PersonAdd /><Link to='/addadmin' className={classes.linkText}> Add Admin</Link></Typography>
                <Typography variant="h6"><PostAdd /><Link to='/addproduct' className={classes.linkText}> Add Product</Link></Typography>
                <Typography variant="h6"><ListAlt /><Link to='/allproducts' className={classes.linkText}> List All Products</Link></Typography>
                <Button style={{ marginLeft: '25px' }} variant="contained" color="secondary" onClick={logout}>Logout - {user?.result?.username}</Button>
            </div>
        </Paper>
    )
}

export default AdminMenu
