import './index.scss';
import { IBasketItem } from "../../models/IBasketItem";
import { PriceBox } from "../PriceBox";
import React from 'react';
import basketIcon from '../../assets/basket-icon.svg';
import { useCallback } from 'react';
import { useSelector } from "react-redux";

type IBasketPreviewProps = {
};

export const BasketPreview: React.FC<any> = (props: IBasketPreviewProps) => {
  const itemList = useSelector((state: any) => state.basketReducer.itemList as IBasketItem[]);

	const calculateTotalQuantity = useCallback(() => {
		let totalPrice =  0;
		itemList.forEach((item) => {
			totalPrice = totalPrice + (item.price * item.quantity);
		});
		return totalPrice;
	}, [itemList]);

	return (
		<div className={"basket-preview"}>
			<img src={basketIcon} alt="basket-icon"/>
			<PriceBox price={calculateTotalQuantity()} />
		</div>
	);
};
