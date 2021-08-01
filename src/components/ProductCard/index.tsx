import './index.scss';
import { AddToBasket } from "../AddToBasket";
import { IProduct } from "../../models/IProduct";
import { PriceBox } from "../PriceBox";
import React from 'react';
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsActions";
import { useEffect } from 'react';
// todo: muhtemelen add to basket action'ı bağlanacak

type IProductCardProps = {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = (props: IProductCardProps ) => {
  const { name, price } = props.product;
  return (
    <div className={'product-card'}>
      <div className={'image-frame'}>
        <img src="https://picsum.photos/92" alt="product-image" loading={"lazy"}/>
      </div>
      <PriceBox price={price} />
      <div className={'product-name'} title={name}>{name}</div>
      <AddToBasket product={props.product} />
    </div>
  )
};

