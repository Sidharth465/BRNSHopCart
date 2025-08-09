import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import React from 'react';
import Products from '../screens/app/Products';
import Cart from '../screens/app/Cart';

export type BottomTabsParamsList = {
  Products: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParamsList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
