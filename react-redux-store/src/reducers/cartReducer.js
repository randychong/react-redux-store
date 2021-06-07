import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types/cart-types"

const initialState = []

const Cart = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const newCart = [...state, action.payload];
            return newCart
        case REMOVE_FROM_CART:
            const updatedCart = state.filter((product) => product.id !== action.payload)
            return updatedCart
        default:
            return state;
    }
}

export default Cart