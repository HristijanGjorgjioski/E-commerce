import React, { useState } from 'react'
import { Button, Grid, Grow, Paper, Typography } from '@material-ui/core'
import { ListAlt, PersonAdd, PostAdd } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import useStyles from './styles'
import * as actionType from '../../constants/actionTypes'
// import Form from './Form/Form'
import Products from './Products/Products'

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
        <Grow in>
            <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={9}>
                    <Products />
                </Grid>
            </Grid>
        </Grow>
    )
}

export default Admin
