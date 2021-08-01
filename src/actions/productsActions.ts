import { getApiProducts } from "../apis/marketApi";

export const productsActionTypes = {
  GET_PRODUCTS_START: 'GET_PRODUCTS_START',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR'
}


export const getProducts: any = (page: number, limit: number) => async (dispatch: any) => {
  const res = await getApiProducts(page, limit);
  if (res) {
    dispatch({ type: productsActionTypes.GET_PRODUCTS_SUCCESS, payload: { ...res, activePage: page }});
  } else {
    dispatch({ type: productsActionTypes.GET_PRODUCTS_ERROR, payload: null })
  }
};

