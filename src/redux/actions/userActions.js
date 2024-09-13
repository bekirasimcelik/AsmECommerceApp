import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  dispatch({type: 'USER_LOGIN_REQUEST'});
  try {
    const response = await axios.post('https://api.example.com/login', {
      email,
      password,
    });
    dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data});

    await AsyncStorage.setItem('userInfo', JSON.stringify(response.data));
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAILURE',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async dispatch => {
  await AsyncStorage.removeItem('userInfo');
  dispatch({type: 'USER_LOGOUT'});
};

export const register = (name, email, password) => async dispatch => {
  dispatch({type: 'USER_REGISTER_REQUEST'});
  try {
    const response = await axios.post('https://api.example.com/register', {
      name,
      email,
      password,
    });
    dispatch({type: 'USER_REGISTER_SUCCESS', payload: response.data});

    dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data});
    await AsyncStorage.setItem('userInfo', JSON.stringify(response.data));
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAILURE',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
