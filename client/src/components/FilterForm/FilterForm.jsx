import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Typography } from '@material-ui/core'

import { searchProduct } from '../../actions/product'
import { genderData, sizeData, collectionData } from '../../constants/data'
import useStyles from './styles'

const FilterForm = () => {
    const [searchData, setSearchData] = useState({ size: '', gender: '', selection: '' })
    const dispatch = useDispatch()
    const history = useHistory();
    const classes = useStyles()

    // const handleSubmit = () => {
    //     dispatch(searchProduct(searchData))
    //     history.push(`/products/search?gender=${searchData.gender || 'none'}&size=${searchData.size}&collection=${searchData.selection}`)
    // }

    useEffect(() => {
        dispatch(searchProduct(searchData))

        // history.push(`/product/search?gender=${searchData.gender || 'none'}&size=${searchData.size}&collection=${searchData.selection}`)
    }, [searchData])

    return (
        <Paper elevation={6} className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <div className={classes.selectDiv}>
                    <FormControl style={{ width: '33%' }}>
                        <InputLabel id="collection-label">Collection</InputLabel>
                        <Select
                            labelId="collection-label"
                            id="collection-label-id"
                            label="Collection"
                            value={searchData.selection}
                            onChange={(e) => {setSearchData({ ...searchData, selection: e.target.value });}}
                        >
                            {collectionData.map((d) => <MenuItem key={d.name} value={d.name}>{d.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '33%' }}>
                        <InputLabel id="size-label">Size</InputLabel>
                        <Select
                            labelId="size-label"
                            id="size-label-id"
                            label="Size"
                            value={searchData.size}
                            onChange={(e) => {setSearchData({ ...searchData, size: e.target.value });}}
                        >
                            {sizeData.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <RadioGroup row aria-label="gender" name="radio-buttons-group" onChange={(e) => {setSearchData({ ...searchData, gender: e.target.value });}}>
                            {genderData.map((g, i) => <FormControlLabel key={i} value={g} control={<Radio />} label={<Typography variant="body2">{g}</Typography>} />)}
                        </RadioGroup>
                    </FormControl>
                </div>
            </form>
        </Paper>
    )
}

export default FilterForm