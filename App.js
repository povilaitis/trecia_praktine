import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { CarProvider } from './CarContext';

export default function App() {
  return (
    <CarProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CarProvider>
  );
}