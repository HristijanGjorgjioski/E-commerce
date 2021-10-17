import React, { useState } from 'react'
import { AppBar, Button, Container, Grid, Grow, Input, Paper, TextField, Typography } from '@material-ui/core'
import { ListAlt, PersonAdd, PostAdd } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import useStyles from './styles'
import * as actionType from '../../constants/actionTypes'
import Products from './Products/Products'
import Form from './Form/Form'
import Header from '../Header/Header'

const Admin = () => {
    const classes = useStyles()
    const [currentId, setCurrentId] = useState(0)

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Header />
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Products />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Admin
