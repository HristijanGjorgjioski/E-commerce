import React, { useState } from 'react'
import { FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select } from '@material-ui/core'

import useStyles from './styles'
import { genderData, sizeData, collectionData } from '../../constants/data'

const FilterForm = () => {
    const [searchData, setSearchData] = useState({ size: '', gender: '', selection: '' })
    const classes = useStyles()

    return (
        <Paper elevation={6} className={classes.paper}>
            <form>
                <div className={classes.selectDiv}>
                    <FormControl required style={{ width: '46%' }}>
                        <InputLabel id="collection-label">Collection</InputLabel>
                        <Select
                            labelId="collection-label"
                            id="collection-label-id"
                            label="Collection"
                            value={searchData.selection}
                            onChange={(e) => setSearchData({ ...searchData, selection: e.target.value })}
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
                            value={searchData.size}
                            onChange={(e) => setSearchData({ ...searchData, size: e.target.value })}
                        >
                            {sizeData.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <FormControl required>
                    <RadioGroup row aria-label="gender" name="radio-buttons-group" onChange={(e) => setSearchData({ ...searchData, gender: e.target.value })}>
                        {genderData.map((g, i) => <FormControlLabel key={i} value={g} control={<Radio />} label={g} />)}
                    </RadioGroup>
                </FormControl>
            </form>
        </Paper>
    )
}

export default FilterForm
