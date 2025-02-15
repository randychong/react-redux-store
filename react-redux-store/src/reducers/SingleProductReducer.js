import { SET_SELECTED_PRODUCT } from "../action-types/single-product-types"

const initialState = []
const singleProduct = (state = initialState, action) => {
    switch(action.type) {
        case SET_SELECTED_PRODUCT:
            return state = action.payload
        default:
            return state;
    }
}

export default singleProduct