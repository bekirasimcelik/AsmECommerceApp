import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';

const ProductDetailsScreen = ({route}) => {
  const {product} = route.params;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({type: 'ADD_TO_CART', product});
  };

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.price} TL</Text>
      <Button title="Sepete Ekle" onPress={addToCart} />
    </View>
  );
};

export default ProductDetailsScreen;
