import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

function AddExerciseScreen(props) {
  return (
    <View style={page.container}>
      <Text>AddExerciseScreen Screen</Text>
    </View>
  );
}
const page = StyleSheet.create({
  container: { flex: 1 },
});

export default AddExerciseScreen;
