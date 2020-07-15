import React from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { List } from "react-native-paper";
import AddExerciseButton from "../components/atoms/AddExerciseButton";

import { connect } from "react-redux";
import ExerciseList from "../components/molecules/ExerciseList";

function ExerciseScreen(props) {
  return (
    <View style={page.MainContainer}>
      <ExerciseList />
      <AddExerciseButton navigation={props.navigation} />
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
    showModal: (bool) => dispatch(showExerciseModal(bool)),
  };
};

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseScreen);
