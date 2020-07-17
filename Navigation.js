import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import AddExerciseScreen from "./src/screens/AddExerciseScreen";
import HeaderBar from "./src/components/molecules/HeaderBar";
import RoutineScreen from "./src/screens/RoutineScreen";
import RoutineDetailScreen from "./src/screens/RoutineDetailScreen";
import ExerciseDetailScreen from "./src/screens/ExerciseDetailScreen";
import RoutineAddExerciseScreen from "./src/screens/RoutineAddExerciseScreen";
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <HeaderBar headerTitle="Home" />,
            headerShown: false,
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
          name="RoutineDetail"
          component={RoutineDetailScreen}
          options={{
            headerTitle: (props) => <HeaderBar headerTitle="Routine detail" />,
          }}
        />
        <Stack.Screen
          name="ExerciseDetail"
          component={ExerciseDetailScreen}
          options={{
            headerTitle: (props) => <HeaderBar headerTitle="Routine detail" />,
          }}
        />

        <Stack.Screen
          name="AddExerciseToRoutine"
          component={RoutineAddExerciseScreen}
          options={{
            headerTitle: (props) => (
              <HeaderBar headerTitle="Add exercise to routine" />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
