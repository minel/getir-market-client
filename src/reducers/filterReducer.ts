import { ICompany } from "../models/ICompany";
import { IFilterState } from "../models/IFilterState";
import { filterActionTypes } from "../actions/filterActions";

export type FilterState = Readonly<{
  selectedFilterIds: string[];
}>;

const INITIAL_STATE: FilterState = {
  selectedFilterIds: []
}
//todo silmeye bak
export const filterReducer: any = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case filterActionTypes.SELECT_FILTER: return { ...state, selectedFilterIds: [...state.selectedFilterIds, action.payload ]}
    case filterActionTypes.REMOVE_FILTER: return { ...state, selectedFilterIds: [...state.selectedFilterIds.filter( a => a !== action.payload)]};
    default: return state;
  }
  return state;
};
