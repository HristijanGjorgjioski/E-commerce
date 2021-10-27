import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Typography } from '@material-ui/core'

import { searchProduct } from '../../../actions/product'
import { genderData, sizeData, collectionData } from '../../../constants/data'
import useStyles from './styles'

const FilterForm = () => {
    const [searchData, setSearchData] = useState({ size: '', gender: '', selection: '' })
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(searchProduct(searchData))
    }, [searchData])

    return (
        <Paper elevation={6} className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <div className={classes.selectDiv}>
                    <div className={classes.selectSubDiv}>
                    <FormControl className={classes.formControl}>
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
                    <FormControl className={classes.formControl}>
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
                    </div>
                    <div className={classes.radioDiv}>
                    <FormControl>
                        <RadioGroup row aria-label="gender" name="radio-buttons-group" onChange={(e) => {setSearchData({ ...searchData, gender: e.target.value });}}>
                            {genderData.map((g, i) => <FormControlLabel key={i} value={g} control={<Radio />} label={<Typography variant="body2">{g}</Typography>} />)}
                        </RadioGroup>
                    </FormControl>
                    </div>
                </div>
            </form>
        </Paper>
    )
}

export default FilterForm
