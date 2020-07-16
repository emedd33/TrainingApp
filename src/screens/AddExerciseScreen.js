import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import ExerciseForm from "../components/Exercise/ExerciseForm";

function AddExerciseScreen(props) {
  return (
    <View style={styles.container}>
      <ExerciseForm navigation={props.navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { margin: 20 },
  input: {},
});

export default AddExerciseScreen;
