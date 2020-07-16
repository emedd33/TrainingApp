import React from "react";

import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import FloatingButton from "../components/atoms/FloatingButton";
import { connect } from "react-redux";
import RoutineExerciseList from "../components/Routine/RoutineExerciseList";
const RoutineDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputText}>
        <Text>{props.route.params.routine.name}</Text>
      </TouchableOpacity>
      <RoutineExerciseList routine={props.route.params.routine} />

      <FloatingButton
        redirect="AddExerciseToRoutine"
        navigation={props.navigation}
        params={props.route.params.routine}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputText: {
    textAlign: "center",
  },
});

export default RoutineDetailScreen;
