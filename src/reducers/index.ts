import { basketReducer } from "./basketReducer";
import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  basketReducer: basketReducer
})

export default rootReducer;
