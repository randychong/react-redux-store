import { DISPLAY_CART } from "../action-types/cart-types"

const initialState = "cart item"

const Cart = (state = initialState, action) => {
    switch(action.type) {
        case DISPLAY_CART:
            return state;
        default:
            return state;
    }
}

export default Cart