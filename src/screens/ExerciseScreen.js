import React from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { List } from "react-native-paper";
import FloatingRedirectButton from "../components/atoms/FloatingRedirectButton";

import { connect } from "react-redux";
import { deleteExercise } from "../store/actions/TypedActions";
import ExerciseList from "../components/Exercise/ExerciseList";
function ExerciseScreen(props) {
  return (
    <View style={page.MainContainer}>
      <ExerciseList navigation={props.navigation} />
      <FloatingRedirectButton
        navigation={props.navigation}
        redirect="AddExercise"
      />
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteExercise: (key) => dispatch(deleteExercise(key)),
  };
};

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseScreen);
