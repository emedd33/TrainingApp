import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import AddExerciseScreen from "./src/screens/AddExerciseScreen";
import { Provider } from "react-redux";
import configureStore from "./src/store/store";
import HeaderBar from "./src/components/molecules/HeaderBar";
import RoutineScreen from "./src/screens/RoutineScreen";
import RoutineDetailScreen from "./src/screens/RoutineDetailScreen";
import ExerciseDetailScreen from "./src/screens/ExerciseDetailScreen";
import RoutineAddExerciseScreen from "./src/screens/RoutineAddExerciseScreen";

import SideMenu from "react-native-side-menu";
import MenuBar from "./src/components/molecules/MenuBar";
import Navigation from "./Navigation";

const store = configureStore();

export default function App(props) {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
