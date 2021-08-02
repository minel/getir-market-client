import './index.scss';
import { BaseSyntheticEvent, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../Checkbox";
import { IFilterState } from "../../models/IFilterState";
import React from 'react';
import debounce from 'lodash/debounce';
import { getCompanies } from "../../actions/companyActions";
import { reducerTypes } from "../../reducers";


type IFilterProps = {
  reducerType: reducerTypes;
}

export const Filter: React.FC<IFilterProps> = (props: IFilterProps ) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => {
    return state[props.reducerType] as IFilterState<any>
  });

  const dispatchCompanies = (searchVal: any) => {
    dispatch(getCompanies(searchVal));
  };

  // Protect the api for request spamming.
  const getCompaniesWithDebounce = debounce((searchVal: any) => { dispatchCompanies(searchVal)}, 250)

  const onSearchTextChange = (e: BaseSyntheticEvent) => {
    const inputText = e.target.value;
    const trimInput = inputText.trim();
    getCompaniesWithDebounce(trimInput);
  };

  return (
    <div className={'filter'}>
      <div className={'filter-name'}>{state.itemName}</div>
      <div className={'filter-items'}>
        <div className={'items-search'}>
          <input type={'text'} onChange={onSearchTextChange} placeholder={'Search brand'}/>
        </div>
        <div className={'items-box'}>
          {state.data.length > 0 ?
            state.data.map((filterItemData, index) => (
            <Checkbox checkboxId={`${props.reducerType}_checkbox_${index}`} labelName={filterItemData.name} key={`${props.reducerType}_checkbox_${index}`} />
            ))
            :
            <div className={'no-result'}>No Result</div>
          }
        </div>
      </div>
    </div>
  )
};

