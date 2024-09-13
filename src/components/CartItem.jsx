import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch({type: 'REMOVE_FROM_CART', productId: item.product.id});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.product.name}</Text>
      <Text style={styles.quantity}>Miktar: {item.quantity}</Text>
      <Text style={styles.price}>{item.product.price * item.quantity} TL</Text>
      <TouchableOpacity onPress={removeFromCart}>
        <Icon name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    flex: 3,
    fontSize: 16,
  },
  quantity: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  price: {
    flex: 1,
    textAlign: 'right',
    fontSize: 16,
  },
});

export default CartItem;
