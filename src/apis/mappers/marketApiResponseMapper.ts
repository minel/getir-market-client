import { AxiosResponse } from "axios";
import { DEFAULT_PRODUCT_PAGE_LIMIT } from "../../constants";
import { IProduct } from "../../models/IProduct";
import { ProductsState } from "../../reducers/productsReducer";


export const mapGetProductsResponse = (response: AxiosResponse<IProduct[]>) => {
  if (response.data) {
    return {
      products: response.data,
      totalCount: response.headers['x-total-count'],
      totalPage: Math.ceil(response.headers['x-total-count'] / DEFAULT_PRODUCT_PAGE_LIMIT)
    } as ProductsState
  }
  return null;
};
