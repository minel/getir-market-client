
export const basketActionTypes = {
  ADD_BASKET: 'ADD_BASKET',
  REMOVE_BASKET: 'REMOVE_BASKET'
}

export const addBasket: any = (productId: string, name: string, price: number) => (dispatch: any) => {
  dispatch({ type: basketActionTypes.ADD_BASKET, payload: { productId , name, price }});
};

export const removeBasket: any = (productId: string) => (dispatch: any) => {
  dispatch({ type: basketActionTypes.REMOVE_BASKET, payload: { productId }});
};

