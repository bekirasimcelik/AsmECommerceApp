import {AsyncStorage} from 'react-native';

export const addToCart =
  (product, quantity = 1) =>
  (dispatch, getState) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product,
        quantity,
      },
    });

    AsyncStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
  };

export const removeFromCart = productId => (dispatch, getState) => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });

  AsyncStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
};

export const clearCart = () => dispatch => {
  dispatch({type: 'CLEAR_CART'});
  AsyncStorage.removeItem('cartItems');
};
