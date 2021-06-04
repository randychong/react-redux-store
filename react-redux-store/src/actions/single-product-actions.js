import { SET_SELECTED_PRODUCT } from "../action-types/single-product-types"

export const selectProduct = async (dispatch, product) => {
    return dispatch ({
        type: SET_SELECTED_PRODUCT,
        payload: product,
    })
}