import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { CarContext } from './CarContext';

const AddCarScreen = ({ navigation }) => {
  const { addCar } = useContext(CarContext);
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [carDescription, setCarDescription] = useState('');

  const handleAddCar = () => {
    if (carMake.trim() === '' || carModel.trim() === '' || carYear.trim() === '' || carPrice.trim() === '' || carDescription.trim() === '') {
      return;
    }

    const newCar = {
      make: carMake,
      model: carModel,
      year: parseInt(carYear),
      price: parseFloat(carPrice),
      description: carDescription,
    };

    addCar(newCar);
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Add a Car Advertisement</Text>
      <TextInput
        placeholder="Car Make"
        value={carMake}
        onChangeText={setCarMake}
      />
      <TextInput
        placeholder="Car Model"
        value={carModel}
        onChangeText={setCarModel}
      />
      <TextInput
        placeholder="Car Year"
        value={carYear}
        onChangeText={setCarYear}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Car Price"
        value={carPrice}
        onChangeText={setCarPrice}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Car Description"
        value={carDescription}
        onChangeText={setCarDescription}
        multiline
      />
      <Button title="Add Car" onPress={handleAddCar} />
    </View>
  );
};

export default AddCarScreen;