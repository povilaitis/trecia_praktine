import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { CarContext } from './CarContext';

const EditCarScreen = ({ route, navigation }) => {
  const { car } = route.params;
  const { editCar } = useContext(CarContext);

  
  const [editedCar, setEditedCar] = useState({
    make: car.make,
    model: car.model,
    year: car.year.toString(),
    price: car.price.toString(),
    description: car.description,
  });

  const handleEditCar = () => {
    const updatedCar = { ...car, ...editedCar };
    editCar(updatedCar);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Edit Car Advertisement</Text>
      <TextInput
        placeholder="Make"
        value={editedCar.make}
        onChangeText={(value) => setEditedCar((prev) => ({ ...prev, make: value }))}
      />
      <TextInput
        placeholder="Model"
        value={editedCar.model}
        onChangeText={(value) => setEditedCar((prev) => ({ ...prev, model: value }))}
      />
      <TextInput
        placeholder="Year"
        value={editedCar.year}
        onChangeText={(value) => setEditedCar((prev) => ({ ...prev, year: value }))}
      />
      <TextInput
        placeholder="Price"
        value={editedCar.price}
        onChangeText={(value) => setEditedCar((prev) => ({ ...prev, price: value }))}
      />
      <TextInput
        placeholder="Description"
        value={editedCar.description}
        onChangeText={(value) => setEditedCar((prev) => ({ ...prev, description: value }))}
      />
      <Button title="Save Changes" onPress={handleEditCar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EditCarScreen;