import { combineReducers } from "redux";
import Products from "./productsReducer"
import Cart from "./cartReducer"
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
    Products,
    Cart
});

export default rootReducer;
