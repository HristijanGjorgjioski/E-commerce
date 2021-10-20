import React, { useEffect, useState } from 'react'
import { FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select } from '@material-ui/core'

import useStyles from './styles'
import { genderData, sizeData, collectionData } from '../../constants/data'

const FilterForm = () => {
    const [searchData, setSearchData] = useState({ size: '', gender: '', selection: '' })
    const classes = useStyles()

    const handleSubmit = () => {
        console.log('handleSubmit')
    }

    useEffect(() => {
        console.log(searchData)
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
                            onChange={(e) => {setSearchData({ ...searchData, selection: e.target.value }); handleSubmit();}}
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
                            onChange={(e) => {setSearchData({ ...searchData, size: e.target.value }); handleSubmit();}}
                        >
                            {sizeData.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <RadioGroup row aria-label="gender" name="radio-buttons-group" onChange={(e) => {setSearchData({ ...searchData, gender: e.target.value }); handleSubmit();}}>
                            {genderData.map((g, i) => <FormControlLabel key={i} value={g} control={<Radio />} label={g} />)}
                        </RadioGroup>
                    </FormControl>
                </div>
            </form>
        </Paper>
    )
}

export default FilterForm
