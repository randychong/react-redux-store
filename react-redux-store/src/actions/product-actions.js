import { DISPLAY_PRODUCTS } from "../action-types/products-types"

export const displayProducts = (dispatch) => {
    return dispatch({
        type: DISPLAY_PRODUCTS
    })
}