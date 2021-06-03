import { GET_PRODUCTS } from "../action-types/product-types"

const storeURL = "https://fakestoreapi.com/products"

export const getProducts = async (dispatch) => {
    const response = await fetch(storeURL)
    const json = await response.json()
    return dispatch({
        type: GET_PRODUCTS,
        payload: json,
    })
}