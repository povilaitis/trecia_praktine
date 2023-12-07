import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import { CarContext } from './CarContext';

const HomeScreen = ({ navigation }) => {
  const { state, deleteCar } = useContext(CarContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Car Advertisements</Text>
      <FlatList
        data={state.cars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id.toString()}
            style={styles.button}
            onPress={() => navigation.navigate('CarDetails', { car: item })}
          >
            <Text style={styles.buttonText}>{`${item.make} ${item.model} (${item.year})`}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add Advertisement" onPress={() => navigation.navigate('AddCar')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;