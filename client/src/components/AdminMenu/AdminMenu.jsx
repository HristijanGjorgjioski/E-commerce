import React from 'react'
import { Paper, Typography } from '@material-ui/core'

import useStyles from './styles'

const AdminMenu = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.paper} elevation={6}>
            <div className={classes.mainDiv}>
                <Typography variant="h6">Add Admin</Typography>
                <Typography variant="h6">List All Products</Typography>
                <Typography variant="h6">Add Product</Typography>
            </div>
        </Paper>
    )
}

export default AdminMenu
