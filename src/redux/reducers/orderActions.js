import axios from 'axios';

export const createOrder = orderData => async (dispatch, getState) => {
  dispatch({type: 'CREATE_ORDER_REQUEST'});
  const {userInfo} = getState().user;
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const response = await axios.post(
      'https://api.example.com/orders',
      orderData,
      config,
    );
    dispatch({type: 'CREATE_ORDER_SUCCESS', payload: response.data});
  } catch (error) {
    dispatch({type: 'CREATE_ORDER_FAILURE', payload: error.message});
  }
};
