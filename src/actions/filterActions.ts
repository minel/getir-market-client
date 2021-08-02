
export const filterActionTypes = {
  SELECT_FILTER: 'SELECT_FILTER',
  REMOVE_FILTER: 'REMOVE_FILTER'
}

export const addFilter: any = (selectedFilterId: string) => (dispatch: any) => {
  dispatch({ type: filterActionTypes.SELECT_FILTER, payload: selectedFilterId });
};

export const removeFilter: any = (selectedFilterId: string) => (dispatch: any) => {
  dispatch({ type: filterActionTypes.REMOVE_FILTER, payload: selectedFilterId });
};

