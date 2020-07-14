import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import { Provider } from "react-redux";
import configureStore from "./src/store";
import HeaderBar from "./src/components/molecules/HeaderBar";
const Stack = createStackNavigator();
const store = configureStore();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: (props) => <HeaderBar headerTitle="Home" />,
            }}
          />
          <Stack.Screen name="Exercise" component={ExerciseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
