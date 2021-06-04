import { combineReducers } from "redux";
import Products from "./productsReducer"
import Cart from "./cartReducer"
import singleProduct from "./SingleProductReducer"
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
    Products,
    Cart,
    singleProduct
});

export default rootReducer;
