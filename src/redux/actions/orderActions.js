import axios from 'axios';
import {logout} from './userActions';

export const createOrder = orderData => async (dispatch, getState) => {
  dispatch({type: 'CREATE_ORDER_REQUEST'});
  const {userInfo} = getState().user;

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const response = await axios.post(
      'https://api.example.com/orders',
      orderData,
      config,
    );
    dispatch({type: 'CREATE_ORDER_SUCCESS', payload: response.data});

    dispatch({type: 'CLEAR_CART'});
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Yetkisiz') {
      dispatch(logout());
    }
    dispatch({type: 'CREATE_ORDER_FAILURE', payload: message});
  }
};

export const getOrderDetails = orderId => async (dispatch, getState) => {
  dispatch({type: 'ORDER_DETAILS_REQUEST'});
  const {userInfo} = getState().user;

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const response = await axios.get(
      `https://api.example.com/orders/${orderId}`,
      config,
    );
    dispatch({type: 'ORDER_DETAILS_SUCCESS', payload: response.data});
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Yetkisiz') {
      dispatch(logout());
    }
    dispatch({type: 'ORDER_DETAILS_FAILURE', payload: message});
  }
};
