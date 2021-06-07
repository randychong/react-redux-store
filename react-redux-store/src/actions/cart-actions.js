import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types/cart-types"

export const addToCart = (dispatch, product) => {
    return dispatch ({
        type: ADD_TO_CART,
        payload: product,
    })
}

export const removeFromCart = (dispatch, productID) => {
    return dispatch ({
        type: REMOVE_FROM_CART,
        payload: productID,
    })
}