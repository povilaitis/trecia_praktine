import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CarDetailsScreen from './CarDetailsScreen';
import AddCarScreen from './AddCarScreen';
import EditCarScreen from './EditCarScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
      <Stack.Screen name="AddCar" component={AddCarScreen} />
      <Stack.Screen name="EditCar" component={EditCarScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;