import React, { useState } from 'react'
import { Button, Paper, Typography } from '@material-ui/core'
import { ListAlt, PersonAdd, PostAdd } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import useStyles from './styles'
import * as actionType from '../../constants/actionTypes'
import AddProduct from './AddProduct/AddProduct'
import ListAllProducts from './ListAllProducts/ListAllProducts'

const Admin = () => {
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
        </Paper>
    )
}

export default Admin
