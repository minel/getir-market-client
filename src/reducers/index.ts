import { basketReducer } from "./basketReducer";
import { combineReducers } from "redux";
import { companyReducer } from "./companyReducer";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  productsReducer,
  basketReducer,
  companyReducer
})

export default rootReducer;
