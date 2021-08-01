import './index.scss';
import { addBasket, removeBasket } from "../../actions/basketActions";
import { BasketState } from "../../reducers/basketReducer";
import { IBasketItem } from "../../models/IBasketItem";
import { PriceBox } from "../PriceBox";
import React from 'react';
import { connect } from "react-redux";
import { useCallback } from 'react';

type IBasketProps = {
	itemList: IBasketItem[];
	addBasket: (productId: string, name: string, price: number) => void;
	removeBasket: (productId: string) => void;
};

export const BasketBase: React.FC<any> = (props: IBasketProps) => {

	const calculateTotalQuantity = useCallback(() => {
		let totalPrice =  0;
		props.itemList.forEach((item) => {
			totalPrice = totalPrice + (item.price * item.quantity);
		});
		return totalPrice;
	}, [props.itemList]);

	const onRemoveBasketClick = (productId: string) => {
		props.removeBasket(productId);
	};

	const onAddBasketClick = (productId: string, name: string, price: number) => {
		props.addBasket(productId, name, price);
	};

	const renderBasketItems = () => {
		return props.itemList.map((item, index) => {
			if (item.quantity < 1) return;
			return(
				<div key={`basket_item_${index}`}>
					<div className={'basket-item'} >
						<div className={'item-info-box'}>
							<span className={'item-name'}>{item.name}</span>
							<PriceBox price={item.price} />
						</div>
						<div className={'quantity-box'}>
							<span onClick={() => onRemoveBasketClick(item.productId)}>-</span>
							<span className={'item-quantity'}>{item.quantity}</span>
							<span onClick={() => onAddBasketClick(item.productId, item.name, item.price)}>+</span>
						</div>
					</div>
					<hr />
				</div>
			)
		});
	};

	return (
		<aside className={"basket"}>
			{renderBasketItems()}
			<div className={'total-price'}>
				<PriceBox price={calculateTotalQuantity()} />
			</div>
		</aside>
	);
};

const mapStateToProps = (combinedState: any) => {
	const { itemList } = combinedState.basketReducer as BasketState;
	return {
		itemList
	};
};

export const Basket = connect(mapStateToProps, { addBasket, removeBasket })(BasketBase);
