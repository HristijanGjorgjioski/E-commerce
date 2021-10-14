import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'

import useStyles from './styles'

const data = [{ name: 'Hats' }, { name: 'Female Shoes' }]

const AddProduct = () => {
    const [productData, setProductData] = useState({ title: '', description: '', tags: [], selection: '', selectedFile: '', price: '', size: '' })
    const classes = useStyles()
    const user = JSON.parse(localStorage.getItem('profile'))

    const handleSubmit = () => {

    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} fullWidth>
                <Typography variant="h6">Add Product</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                <FormControl style={{ width: '40%' }}>
                    <InputLabel id="size-label">Size</InputLabel>
                    <Select
                        labelId="size-label"
                        id="size-label-id"
                        label="size"
                    >
                        {data.map((d) => <MenuItem key={d.name} value={d.name} onChange={(e) => setProductData({ ...productData, selection: e.target.value })}>{d.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </form>
        </Paper>
    )
}

export default AddProduct
