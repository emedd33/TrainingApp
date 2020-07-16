import React from "react";

import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import FloatingRedirectButton from "../components/atoms/FloatingRedirectButton";
import { connect } from "react-redux";
import RoutineExerciseList from "../components/Routine/RoutineExerciseList";
const RoutineDetailScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputText}>
        <Text>{props.route.params.routine.name}</Text>
      </TouchableOpacity>
      <RoutineExerciseList
        exerciseList={props.route.params.routine.exercises}
      />

      <FloatingRedirectButton
        redirect="AddExerciseToRoutine"
        navigation={props.navigation}
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
