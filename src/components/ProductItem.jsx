import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';

const ProductItem = ({product, onPress}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({type: 'ADD_TO_CART', product});
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
        <Button title="Sepete Ekle" onPress={addToCart} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: '#888',
    fontSize: 16,
  },
});

export default ProductItem;
