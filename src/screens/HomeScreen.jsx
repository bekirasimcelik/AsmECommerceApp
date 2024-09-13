import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/actions/productActions';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <View>
      <Header title="Anasayfa" />
      <FlatList
        data={products}
        renderItem={({item}) => (
          <ProductItem
            product={item}
            onPress={() => navigation.navigate('Ürün Detayı', {product: item})}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
