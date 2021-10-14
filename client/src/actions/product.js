import { CREATE_PRODUCT, START_LOADING } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const createProduct = (product, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createProduct(product)

        dispatch({ type: CREATE_PRODUCT, payload: data })

        history.push('/admin')
    } catch (error) {
        console.log(error)
    }
}
