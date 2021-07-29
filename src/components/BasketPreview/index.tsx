import './index.scss';
import React from 'react';
import basketIcon from '../../assets/basket-icon.svg';


export const BasketPreview: React.FC = () => {
	return (
		<div className={"basket-preview"}>
			<img src={basketIcon} alt="basket-icon"/>
			<span>₺ 39,97</span>
		</div>
	);
};
