import { IProduct } from "../models/IProduct";
import { productsActionTypes } from "../actions/productsActions";


export type ProductsState = Readonly<{
  products: IProduct[];
  totalCount: number;
  totalPage: number;
  isLoading: boolean;
  activePage: number;
}>;

const INITIAL_STATE: ProductsState = {
  products: [],
  totalCount: 0,
  totalPage: 0,
  isLoading: true,
  activePage: 0
}
export const productsReducer: any = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case productsActionTypes.GET_PRODUCTS_START: return { ...state, isLoading: true }
    case productsActionTypes.GET_PRODUCTS_SUCCESS: return { ...state, products: action.payload.products, totalCount: action.payload.totalCount, totalPage: action.payload.totalPage, activePage: action.payload.activePage, isLoading: false };
    case productsActionTypes.GET_PRODUCTS_ERROR: return { ...state, products: [], totalCount: 0, isLoading: false };
    default: return state;
  }
  return state;
};
