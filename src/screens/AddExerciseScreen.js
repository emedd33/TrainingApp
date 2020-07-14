import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import AddExerciseForm from "../components/organisms/AddExerciseForm";

function AddExerciseScreen(props) {
  return (
    <View style={styles.container}>
      <AddExerciseForm />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { margin: 20 },
  input: {},
});

export default AddExerciseScreen;
