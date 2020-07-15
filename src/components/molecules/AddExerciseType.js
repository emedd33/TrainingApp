import React, { useState, useCallback, useEffect } from "react";
import { addExercise, updateExerciseForm } from "../../actions/TypedActions";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { connect } from "react-redux";
const AddExerciseType = (props) => {
  const updateExerciseForm = (data) => {
    props.updateExerciseForm({ ...props.exerciseForm, ...data });
  };
  return (
    <TextInput
      value={props.exerciseForm.exercise}
      onChangeText={(text) =>
        updateExerciseForm({ exercise: text, hasSubmitted: false })
      }
      onSubmitEditing={() => {
        props.submitExercise(text);
      }}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateExerciseForm: (data) => dispatch(updateExerciseForm(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
    exerciseForm: state.ExerciseFormReducer.exerciseForm,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExerciseType);
