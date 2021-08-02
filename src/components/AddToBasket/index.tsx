import './index.scss';
import { IProduct } from "../../models/IProduct";
import React from 'react';
import { addBasket } from "../../actions/basketActions";
import { useDispatch } from "react-redux";

type IAddToBasketProps = {
  product: IProduct;
};

export const AddToBasket: React.FC<any> = (props: IAddToBasketProps ) => {
  const dispatch = useDispatch();
  const onAddToBasketClick = () => {
    const { product: { slug, name, price }} = props;
    dispatch(addBasket(slug, name, price));
  };

  return (
    <div className={'add-to-basket'} onClick={onAddToBasketClick}>Add </div>
  )
};

