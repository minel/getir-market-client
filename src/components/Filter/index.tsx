import './index.scss';
import { AddToBasket } from "../AddToBasket";
import { IProduct } from "../../models/IProduct";
import { PriceBox } from "../PriceBox";
import React from 'react';
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsActions";
import { useEffect } from 'react';
// todo: muhtemelen add to basket action'ı bağlanacak

type IFilterProps = {
  product: IProduct;
}

export const FilterBase: React.FC<IFilterProps> = (props: IFilterProps ) => {
  const { name, price } = props.product;
  return (
    <div className={'filter'}>
      <div className={'image-frame'}>
        <img src="https://picsum.photos/92" alt="product-image" loading={"lazy"}/>
      </div>
      <PriceBox price={price} />
      <div className={'product-name'} title={name}>{name}</div>
      <AddToBasket product={props.product} />
    </div>
  )
};

