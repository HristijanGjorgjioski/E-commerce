import React from 'react'
import { Paper, Typography } from '@material-ui/core'

import useStyles from './styles'
import { ExitToApp, ListAlt, PersonAdd, PostAdd } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const AdminMenu = () => {
    const classes = useStyles()

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
