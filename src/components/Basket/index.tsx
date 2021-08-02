import './index.scss';
import { addBasket, removeBasket } from "../../actions/basketActions";
import { useDispatch, useSelector } from "react-redux";
import { IBasketItem } from "../../models/IBasketItem";
import { PriceBox } from "../PriceBox";
import React from 'react';
import { useCallback } from 'react';

type IBasketProps = {
};

export const Basket: React.FC<any> = (props: IBasketProps) => {
	const itemList = useSelector((state: any) => state.basketReducer.itemList as IBasketItem[]);
	const dispatch = useDispatch();

	const calculateTotalQuantity = useCallback(() => {
		let totalPrice =  0;
		itemList.forEach((item) => {
			totalPrice = totalPrice + (item.price * item.quantity);
		});
		return totalPrice;
	}, [itemList]);

	const onRemoveBasketClick = (productId: string) => {
		dispatch(removeBasket(productId));
	};

	const onAddBasketClick = (productId: string, name: string, price: number) => {
		dispatch(addBasket(productId, name, price));
	};

	const renderBasketItems = () => {
		const basketItems = itemList.map((item, index) => {
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

		if (basketItems.every(e => e === undefined)) {
			return (<div className={'no-item'}>No Item</div>);
		}
		return basketItems;
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
