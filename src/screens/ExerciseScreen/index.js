import React, { useState } from "react";
import { StyleSheet, Text, View, Form } from "react-native";

import ExerciseList from "../../components/molecules/ExerciseList";
import AppModal from "../../components/molecules/AppModal/AppModal";

function ExerciseScreen(props) {
  return (
    <View style={page.container}>
      <AppModal />
    </View>
  );
}
const page = StyleSheet.create({
  container: { flex: 1, backgroundColor: "red" },
  title: {
    textAlign: "center",
    fontSize: "2rem",
  },
  navigationButton: {
    margin: "auto",
  },
  inputButton: {
    margin: "auto",
  },
});

export default ExerciseScreen;
