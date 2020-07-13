import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import ExcerciseScreen from './src/screens/ExcerciseScreen';
import { Provider } from 'react-redux';
import configureStore from './src/store';

const Stack = createStackNavigator();
const store = configureStore();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Excercise" component={ExcerciseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

