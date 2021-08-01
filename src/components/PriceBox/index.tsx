import './index.scss';
import { CURRENCY_SYMBOL } from "../../constants";
import { IProduct } from "../../models/IProduct";
import React from 'react';
import { useMemo } from 'react';
// todo: muhtemelen add to basket action'ı bağlanacak

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
      <div>{CURRENCY_SYMBOL} {getFormattedPrice}</div>
    </div>
  )
};

