import './index.scss';
import { CURRENCY_SYMBOL } from "../../constants";
import React from 'react';
import { useMemo } from 'react';

type IPriceBoxProps = {
  price: number;
}

export const PriceBox: React.FC<IPriceBoxProps> = (props: IPriceBoxProps ) => {
  const getFormattedPrice = useMemo(() => {
    const { price } = props;
    const formattedPrice = price.toFixed(2).replace('.', ',');
    return formattedPrice;
  }, [props.price]);

  return (
    <div className={'price-box'}>
      {CURRENCY_SYMBOL} {getFormattedPrice}
    </div>
  )
};

