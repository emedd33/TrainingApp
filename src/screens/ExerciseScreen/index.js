import React from "react";
import { StyleSheet, View } from "react-native";

import AppModal from "../../components/molecules/AppModal";

function ExerciseScreen(props) {
  return (
    <View style={page.container}>
      <AppModal />
    </View>
  );
}
const page = StyleSheet.create({
  container: { flex: 1, backgroundColor: "red" },
  navigationButton: {
    margin: "auto",
  },
  inputButton: {
    margin: "auto",
  },
});

export default ExerciseScreen;
