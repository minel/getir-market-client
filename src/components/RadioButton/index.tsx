import './index.scss';
import React from 'react';

type IRadioButtonProps = {
  labelName: string;
  checkboxId: string;
}

export const RadioButton: React.FC<IRadioButtonProps> = (props: IRadioButtonProps ) => {
  //  todo: Need to add business
  return (
    <div className={'radio-item'}>
      <input type="radio" id={props.checkboxId} name="todo"/>
      <label htmlFor={props.checkboxId} title={props.labelName}>{props.labelName}</label>
    </div>
  )
};
