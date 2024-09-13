import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  const {items} = useSelector(state => state.cart);

  return (
    <View>
      {items.length === 0 ? (
        <Text>Sepetiniz boş.</Text>
      ) : (
        <FlatList
          data={items}
          renderItem={({item}) => <CartItem item={item} />}
          keyExtractor={item => item.product.id.toString()}
        />
      )}
    </View>
  );
};

export default CartScreen;
