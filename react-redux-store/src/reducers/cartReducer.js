import { ADD_TO_CART } from "../action-types/cart-types"

const initialState = []

const Cart = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const newCart = [...state, action.payload];
            return newCart
        default:
            return state;
    }
}

export default Cart