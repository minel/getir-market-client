import { DEFAULT_PRODUCT_PAGE_LIMIT, DEFAULT_PRODUCT_PAGE_NUMBER, MARKET_API_URL } from "../constants";
import axios, { AxiosResponse } from "axios";
import { ICompany } from "../models/ICompany";
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

export const getApiCompanies = async (searchVal: any) => {
  try {
    // we can pass the data dynamically
    const response: AxiosResponse<ICompany[]> = await axios.get(`${MARKET_API_URL}/companies`, { params: { name_like: searchVal }});

    if (response && response.data) {
      return response.data;
    }
    return null;
  } catch {
    return null;
  }
};
