import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import AddExerciseScreen from "./src/screens/AddExerciseScreen";
import { Provider } from "react-redux";
import configureStore from "./src/store";
import HeaderBar from "./src/components/molecules/HeaderBar";
import RoutineScreen from "./src/screens/RoutineScreen";
import AddRoutineScreen from "./src/screens/AddRoutineScreen";

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
          <Stack.Screen
            name="Exercise"
            component={ExerciseScreen}
            options={{
              headerTitle: (props) => <HeaderBar headerTitle="Exercises" />,
            }}
          />
          <Stack.Screen
            name="AddExercise"
            component={AddExerciseScreen}
            options={{
              headerTitle: (props) => (
                <HeaderBar headerTitle="Add new exercise" />
              ),
            }}
          />
          <Stack.Screen
            name="Routine"
            component={RoutineScreen}
            options={{
              headerTitle: (props) => <HeaderBar headerTitle="Routines" />,
            }}
          />
          <Stack.Screen
            name="AddRoutine"
            component={AddRoutineScreen}
            options={{
              headerTitle: (props) => (
                <HeaderBar headerTitle="Add new routine" />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
