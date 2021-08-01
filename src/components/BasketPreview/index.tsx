import './index.scss';
import { BasketState } from "../../reducers/basketReducer";
import React from 'react';
import basketIcon from '../../assets/basket-icon.svg';
import { connect } from "react-redux";


export const BasketPreviewBase: React.FC = () => {
	return (
		<div className={"basket-preview"}>
			<img src={basketIcon} alt="basket-icon"/>
			<span>₺ 39,97</span>
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
