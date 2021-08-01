import './index.scss';
import { BasketState } from "../../reducers/basketReducer";
import { IBasketItem } from "../../models/IBasketItem";
import { IProduct } from "../../models/IProduct";
import React from 'react';
import { addBasket } from "../../actions/basketActions";
import { connect } from "react-redux";
import { useEffect } from 'react';

type IAddToBasketProps = {
  product: IProduct;
  addBasket: (productId: string, name: string, price: number) => void;
};

const AddToBasketBase: React.FC<any> = (props: IAddToBasketProps ) => {

  const onAddToBasketClick = () => {
    const { product: { slug, name, price }} = props;
    props.addBasket(slug, name, price);
  };

  return (
    <div className={'add-to-basket'} onClick={onAddToBasketClick}>Add </div>
  )
};


export const AddToBasket = connect(null, { addBasket })(AddToBasketBase);

