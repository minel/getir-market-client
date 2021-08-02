import { ICompany } from "../models/ICompany";
import { IFilterState } from "../models/IFilterState";
import { companyActionTypes } from "../actions/companyActions";

const INITIAL_STATE: IFilterState<ICompany> = {
  data: [],
  isLoading: true,
  itemName: "Companies"
}
export const companyReducer: any = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case companyActionTypes.GET_COMPANIES_START: return { ...state, isLoading: true }
    case companyActionTypes.GET_COMPANIES_SUCCESS: return { ...state, isLoading: false, data: action.payload };
    case companyActionTypes.GET_COMPANIES_ERROR: return { ...state, isLoading: false, data: []};
    default: return state;
  }
  return state;
};
