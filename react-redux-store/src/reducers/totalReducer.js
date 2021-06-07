import { ADD_TO_TOTAL } from "../action-types/cart-types"

const initialState = 0

const Total = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_TOTAL:
            const totalPrice = [...state] + action.payload
            return totalPrice
    }
}