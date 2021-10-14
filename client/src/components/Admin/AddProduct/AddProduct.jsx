import React, { useState } from 'react'
import { Paper, Select, TextField, Typography } from '@material-ui/core'

import useStyles from './styles'

const { Option } = Select

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
                <TextField name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                <Select
                    showSearch
                    className="select-collection"
                    placeholder="Select a Collection"
                >
                    <Option>Collection</Option>
                </Select>
            </form>
        </Paper>
    )
}

export default AddProduct
