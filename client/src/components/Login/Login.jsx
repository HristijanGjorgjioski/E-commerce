import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from '@material-ui/core'

import useStyles from './styles'

const Login = () => {
    const classes = useStyles()
    const [loginData, setLoginData] = useState({ username: '', password: '' })

    const handleSubmit = () => {};

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Login</Typography>
                <TextField name="username" variant="outlined" label="Username" fullWidth value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
                <TextField name="password" variant="outlined" label="Password" fullWidth value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                <Button className={''} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default Login
