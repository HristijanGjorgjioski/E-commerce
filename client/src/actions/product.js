import { CREATE_PRODUCT, END_LOADING, FETCH_ALL, START_LOADING } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getProducts = () => async(dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.getProducts()
        console.log(data)

        dispatch({ type: FETCH_ALL, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

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
