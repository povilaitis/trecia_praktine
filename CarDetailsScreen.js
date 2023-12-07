import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CarContext } from './CarContext';

const CarDetailsScreen = ({ route, navigation }) => {
  const { car } = route.params;
  const { deleteCar } = useContext(CarContext);

  const handleDeleteCar = () => {
    deleteCar(car.id);
    navigation.navigate('Home');
  };

  const handleEditCar = () => {
    navigation.navigate('EditCar', { car });
  };

  return (
    <View style={styles.container}>
      <Text>{`${car.make} ${car.model} (${car.year})`}</Text>
      <Text>{`Price: $${car.price}`}</Text>
      <Text>{car.description}</Text>
      <Button title="Delete" onPress={handleDeleteCar} />
      <Button title="Edit" onPress={handleEditCar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginTop: 10,
  },
});

export default CarDetailsScreen;