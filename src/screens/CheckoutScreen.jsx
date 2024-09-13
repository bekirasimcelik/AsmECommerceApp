import React, {useEffect} from 'react';
import {View, Button, ActivityIndicator, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createOrder} from '../redux/actions/orderActions';

const CheckoutScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);
  const {loading, error, order} = useSelector(state => state.order);

  const handleCheckout = () => {
    const orderData = {
      orderItems: cartItems,
      // Diğer sipariş bilgileri
    };
    dispatch(createOrder(orderData));
  };

  useEffect(() => {
    if (order) {
      navigation.navigate('Sipariş Onayı', {orderId: order.id});
    }
  }, [order, navigation]);

  return (
    <View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text>{error}</Text>}
      <Button title="Ödeme Yap" onPress={handleCheckout} />
    </View>
  );
};

export default CheckoutScreen;
