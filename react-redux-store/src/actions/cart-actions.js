import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_TOTAL } from "../action-types/cart-types"

export const addToCart = (dispatch, product) => {
    dispatch ({
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

export const addToTotal = (dispatch, productPrice) => {
    return dispatch ({
        type: ADD_TO_TOTAL,
        payload: productPrice,
    })
}