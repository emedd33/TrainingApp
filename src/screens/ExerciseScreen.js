import React from "react";
import { StyleSheet, View } from "react-native";
import FloatingButton from "../components/atoms/FloatingButton";
import ExerciseList from "../components/Exercise/ExerciseList";

function ExerciseScreen(props) {
  return (
    <View style={page.MainContainer}>
      <ExerciseList navigation={props.navigation} />
      <FloatingButton navigation={props.navigation} redirect="AddExercise" />
    </View>
  );
}
const page = StyleSheet.create({
  container: { flex: 1 },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
  },
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
  },
});

export default ExerciseScreen;
