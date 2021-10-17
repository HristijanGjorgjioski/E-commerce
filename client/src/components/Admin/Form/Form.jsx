import React, { useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import useStyles from './styles'
import { createProduct } from '../../../actions/product'

const collectionData = [{ name: 'Hats' }, { name: 'Female Shoes' }, { name: 'Sneakers' }, { name: 'Winter jackets' }]
const sizeData = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const Form = ({ currentId, setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const username = user.result.username
    const [productData, setProductData] = useState({ title: '', description: '', selection: '', selectedFile: '', price: '', size: '', createdBy: username })
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const clear = () => {
        setProductData({ title: '', description: '', selectedFile: '', size: '', selection: '', price: '' });
      };

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createProduct(productData, history));
        clear();
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Add Product</Typography>
                <TextField disabled name="createdBy" variant="outlined" fullWidth value={username} />
                <TextField required name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                {/* <TextField required name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} /> */}
                <TextField required name="price" type="number" variant="outlined" label="Price $" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
                <div className={classes.selectDiv}>
                    <FormControl required style={{ width: '46%' }}>
                        <InputLabel id="collection-label">Collection</InputLabel>
                        <Select
                            labelId="collection-label"
                            id="collection-label-id"
                            label="Collection"
                            onChange={(e) => setProductData({ ...productData, selection: e.target.value })}
                        >
                            {collectionData.map((d) => <MenuItem key={d.name} value={d.name}>{d.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl required style={{ width: '46%' }}>
                        <InputLabel id="size-label">Size</InputLabel>
                        <Select
                            labelId="size-label"
                            id="size-label-id"
                            label="Size"
                            onChange={(e) => setProductData({ ...productData, size: e.target.value })}
                        >
                            {sizeData.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
