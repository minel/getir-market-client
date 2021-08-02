import { basketReducer } from "./basketReducer";
import { combineReducers } from "redux";
import { companyReducer } from "./companyReducer";
import { filterReducer } from "./filterReducer";
import { productsReducer } from "./productsReducer";

export enum reducerTypes {
  products = 'productsReducer',
  basket = 'basketReducer',
  company = 'companyReducer',
  filter = 'filterReducer'
}


const rootReducer = combineReducers({
  productsReducer,
  basketReducer,
  companyReducer,
  filterReducer
})

export default rootReducer;
