import { DISPLAY_CART } from "../action-types/cart-types"

export const displayCart = (dispatch) => {
    return dispatch({
        type: DISPLAY_CART
    })
}