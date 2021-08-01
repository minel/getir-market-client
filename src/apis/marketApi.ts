import { DEFAULT_PRODUCT_PAGE_LIMIT, DEFAULT_PRODUCT_PAGE_NUMBER, MARKET_API_URL } from "../constants";
import axios from "axios";
import { mapGetProductsResponse } from "./mappers/marketApiResponseMapper";

export const getApiProducts = async (page: number = DEFAULT_PRODUCT_PAGE_NUMBER, limit: number = DEFAULT_PRODUCT_PAGE_LIMIT) => {
  try {
    const response = await axios.get(`${MARKET_API_URL}/products`, { params: { _page: page, _limit: limit }});

    if (response) {
      return mapGetProductsResponse(response);
    }
    return null;
  } catch {
    return null;
  }
};
