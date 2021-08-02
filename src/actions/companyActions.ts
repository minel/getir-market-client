import { getApiCompanies } from "../apis/marketApi";

export const companyActionTypes = {
  GET_COMPANIES_START: 'GET_COMPANIES_START',
  GET_COMPANIES_SUCCESS: 'GET_COMPANIES_SUCCESS',
  GET_COMPANIES_ERROR: 'GET_COMPANIES_ERROR'
}


export const getCompanies: any = (searchVal: any) => async (dispatch: any) => {
  const res = await getApiCompanies(searchVal);
  if (res) {
    dispatch({ type: companyActionTypes.GET_COMPANIES_SUCCESS, payload: res });
  } else {
    dispatch({ type: companyActionTypes.GET_COMPANIES_ERROR, payload: null })
  }
};

