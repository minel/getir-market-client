import './index.scss';
import { Filter } from "../Filter";
import React from 'react';
import { reducerTypes } from "../../reducers";

type IFiltersProps = {
}

export const Filters: React.FC<IFiltersProps> = () => {
  return (
    <aside className={'filters'}>
      <Filter reducerType={reducerTypes.company} />
      {/* todo: <Filter reducerType={reducerTypes.tags} />*/}
    </aside>
  )
};

