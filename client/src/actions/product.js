import { CREATE_PRODUCT } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const createProduct = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(formData)

        dispatch({ type: CREATE_PRODUCT, data })

        router.push('/admin')
    } catch (error) {
        console.log(error)
    }
}
