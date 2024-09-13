import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Anasayfa" component={HomeScreen} />
      <Stack.Screen name="Ürün Detayı" component={ProductDetailsScreen} />
      <Stack.Screen name="Sepet" component={CartScreen} />
      <Stack.Screen name="Ödeme" component={CheckoutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
