import './index.scss';
import { addFilter, removeFilter } from "../../actions/filterActions";
import { useDispatch, useSelector } from "react-redux";
import { FilterState } from "../../reducers/filterReducer";
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

type ICheckboxProps = {
  labelName: string;
  checkboxId: string;
}

export const Checkbox: React.FC<ICheckboxProps> = (props: ICheckboxProps ) => {
  const { selectedFilterIds } = useSelector((state: any) => state.filterReducer as FilterState);
  const [ checked, setChecked ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setChecked(selectedFilterIds.includes(props.checkboxId));
  });

  const onCheckboxChange = () => {
    checked ? dispatch(removeFilter(props.checkboxId)) : dispatch(addFilter(props.checkboxId));
    // todo: pass the value for getting Products with company filter
  };

  return (
    <div className={'checkbox-item'}>
      <input type="checkbox" onChange={onCheckboxChange} checked={checked} id={props.checkboxId} name="todo"/>
      <label htmlFor={props.checkboxId} title={props.labelName}>{props.labelName}</label>
    </div>
  )
};
