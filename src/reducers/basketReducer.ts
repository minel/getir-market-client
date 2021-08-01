import { IBasketItem } from "../models/IBasketItem";
import { basketActionTypes } from "../actions/basketActions";


export type BasketState = Readonly<{
  itemList: IBasketItem[];
}>;

const INITIAL_STATE: BasketState= {
  itemList: []
}
export const basketReducer: any = (state = INITIAL_STATE, action) => {
  const basketItemIndex = state.itemList.findIndex(item => item.productId === action.payload.productId);
  const newItemList = [...state.itemList];

  switch (action.type){
    case basketActionTypes.ADD_BASKET:
      if (basketItemIndex > -1) {
        newItemList[basketItemIndex] = { ...newItemList[basketItemIndex], quantity: newItemList[basketItemIndex].quantity + 1 };
      } else {
        newItemList.push({
          productId: action.payload.productId,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1
        });
      }
      return { ...state, itemList: newItemList };
    case basketActionTypes.REMOVE_BASKET:
      newItemList[basketItemIndex] = { ...newItemList[basketItemIndex], quantity: newItemList[basketItemIndex].quantity - 1 };
      return { ...state, itemList: newItemList };
    default: return state;
  }
  return state;
};
