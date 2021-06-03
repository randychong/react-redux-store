import { GET_PRODUCTS } from "../action-types/product-types"

const initialState = []

const Products = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return (state = action.payload)
        default:
            return state;
    }
}

export default Products