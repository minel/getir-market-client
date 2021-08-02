import './index.scss';
import { RadioButton } from "../RadioButton";
import React from 'react';


type ISortingProps = {
}

export const Sorting: React.FC<ISortingProps> = (props: ISortingProps ) => {

  return (
    <div className={'sorting'}>
      <div className={'sorting-name'}>Sorting</div>
      <div className={'sorting-items'}>
        <div className={'items-box'}>
          <RadioButton labelName={'Price low to high'} checkboxId={'1'} />
          <RadioButton labelName={'Price high to low'} checkboxId={'2'} />
          <RadioButton labelName={'New to old'} checkboxId={'3'} />
          <RadioButton labelName={'Old to new'} checkboxId={'4'} />
        </div>
      </div>
    </div>
  )
};

