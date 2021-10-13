import React, { useState } from 'react'
import { Paper, Typography } from '@material-ui/core'

import useStyles from './styles'

const AddProduct = () => {
    const [productData, setProductData] = useState({ title: '', description: '', tags: [], selection: '', selectedFile: '', price: '', size: '' })
    const classes = useStyles()
    const user = JSON.parse(localStorage.getItem('profile'))

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
