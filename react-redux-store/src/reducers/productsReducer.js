import { DISPLAY_PRODUCTS } from "../action-types/product-types"

const initialState = "product name"

const Products = (state = initialState, action) => {
    switch(action.type) {
        case DISPLAY_PRODUCTS:
            return state;
        default:
            return state;
    }
}

export default Products