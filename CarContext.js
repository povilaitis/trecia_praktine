import React, { createContext, useReducer } from 'react';
import carData from './cars.json';

const initialState = {
  cars: carData.cars || [],
};

const CarContext = createContext();

const carReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case 'UPDATE_CAR_ID':
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.temporaryId
            ? { ...car, id: action.payload.actualId }
            : car
        ),
      };
    case 'DELETE_CAR':
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
      case 'EDIT_CAR':
        return {
          ...state,
          cars: state.cars.map((car) =>
            car.id === action.payload.id ? action.payload : car
          ),
        };
    default:
      return state;
  }
};

const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  const addCar = async (car) => {
    
    const temporaryId = Date.now();
    const carWithTemporaryId = { ...car, id: temporaryId };

    dispatch({ type: 'ADD_CAR', payload: carWithTemporaryId });

    const actualId = await simulateApiCall(carWithTemporaryId);

    dispatch({ type: 'UPDATE_CAR_ID', payload: { temporaryId, actualId } });
  };

  const simulateApiCall = (car) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const actualId = Math.floor(Math.random() * 1000) + 1; 
        resolve(actualId);
      }, 1000); 
    });
  };

  const deleteCar = (carId) => {
    dispatch({ type: 'DELETE_CAR', payload: carId });
  };
  
  const editCar = (car) => {
    dispatch({ type: 'EDIT_CAR', payload: car });
  };
  
  
  return (
    <CarContext.Provider value={{ state, addCar, deleteCar, editCar }}>
      {children}
    </CarContext.Provider>
  );

};

export { CarContext, CarProvider };