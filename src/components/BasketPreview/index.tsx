import './index.scss';
import { BasketState } from "../../reducers/basketReducer";
import { IBasketItem } from "../../models/IBasketItem";
import { PriceBox } from "../PriceBox";
import React from 'react';
import basketIcon from '../../assets/basket-icon.svg';
import { connect } from "react-redux";
import { useCallback } from 'react';

type IBasketPreviewProps = {
	itemList: IBasketItem[];
};

export const BasketPreviewBase: React.FC<any> = (props: IBasketPreviewProps) => {

	const calculateTotalQuantity = useCallback(() => {
		let totalPrice =  0;
		props.itemList.forEach((item) => {
			totalPrice = totalPrice + (item.price * item.quantity);
		});
		return totalPrice;
	}, [props.itemList]);

	return (
		<div className={"basket-preview"}>
			<img src={basketIcon} alt="basket-icon"/>
			<PriceBox price={calculateTotalQuantity()} />
		</div>
	);
};

const mapStateToProps = (combinedState: any) => {
	const { itemList } = combinedState.basketReducer as BasketState;
	return {
		itemList
	};
};

export const BasketPreview = connect(mapStateToProps, null)(BasketPreviewBase);
