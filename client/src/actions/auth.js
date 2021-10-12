import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const login = (formData, router) => async (dispatch) => {
    try {
        const { data } = api.logIn(formData)

        dispatch({ type: AUTH, data })

        router.push('/')
    } catch (error) {
        console.log(error)
    }
}
