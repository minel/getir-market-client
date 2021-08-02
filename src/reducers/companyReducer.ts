import { ICompany } from "../models/ICompany";
import { companyActionTypes } from "../actions/companyActions";


export type CompanyState = Readonly<{
  companies: ICompany[];
  isLoading: boolean;
}>;

const INITIAL_STATE: CompanyState = {
  companies: [],
  isLoading: true
}
export const companyReducer: any = (state = INITIAL_STATE, action) => {

  switch (action.type){
    case companyActionTypes.GET_COMPANIES_START: return { ...state, isLoading: true }
    case companyActionTypes.GET_COMPANIES_SUCCESS: return { ...state, isLoading: false, companies: action.payload.companies };
    case companyActionTypes.GET_COMPANIES_ERROR: return { ...state, isLoading: false, companies: []};
    default: return state;
  }
  return state;
};
