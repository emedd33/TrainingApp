import React from "react";
import { showExerciseModal } from "../../actions/TypedActions";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const AddExerciseForm = (props) => {
  return (
    <View>
      <Text>heisann</Text>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (bool) => dispatch(showExerciseModal(bool)),
  };
};

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
    isModalViewable: state.ExerciseReducer.showExerciseModal,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExerciseForm);
