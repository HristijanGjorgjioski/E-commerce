import React from 'react'
import { Paper, Typography } from '@material-ui/core'

import useStyles from './styles'

const AddProduct = () => {
    const classes = useStyles()

    const handleSubmit = () => {

    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Add Product</Typography>
            </form>
        </Paper>
    )
}

export default AddProduct
