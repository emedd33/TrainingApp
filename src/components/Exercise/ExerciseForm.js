import React, { useState, useCallback, useEffect } from "react";
import {
  addExercise,
  updateExerciseForm,
} from "../../store/actions/TypedActions";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { TextInput, Button } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import ErrorMessage from "../atoms/ErrorMessage";
import ExerciseAddNew from "./ExerciseAddNew";
import ExerciseChooseCategory from "./ExerciseChooseCategory";
const ExerciseForm = (props) => {
  const updateExerciseForm = (data) => {
    props.updateExerciseForm({ ...props.exerciseForm, ...data });
  };
  const submitExercise = () => {
    updateExerciseForm({ hasSubmitted: true });
    if (!props.exerciseForm.error) {
      props.addExercise(props.exerciseForm.exercise);
      updateExerciseForm({
        exercise: "",
        category: "",
        error: false,
        ErrorMessage: "",
      });
      props.navigation.goBack();
    }
  };
  useEffect(() => {
    if (props.exerciseForm.exercise === "") {
      updateExerciseForm({
        error: true,
        ErrorMessage: "Please type in an exercise",
      });
      return;
    }
    if (props.exerciseForm.category === "") {
      updateExerciseForm({
        error: true,
        ErrorMessage: "Please choose a category",
      });
      return;
    }
    updateExerciseForm({
      error: false,
      ErrorMessage: "",
    });
  }, [props.exerciseForm.exercise, props.exerciseForm.category]);
  return (
    <View>
      <ExerciseAddNew />
      <ExerciseChooseCategory
        items={props.categoryList}
        form={props.exerciseForm}
        update={props.updateExerciseForm}
      />

      {props.exerciseForm.hasSubmitted && props.exerciseForm.error ? (
        <ErrorMessage message={props.exerciseForm.ErrorMessage} />
      ) : null}
      <Button
        onPress={() => {
          submitExercise();
        }}
      >
        Add new exercise
      </Button>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addExercise: (exercise) => dispatch(addExercise(exercise)),
    updateExerciseForm: (data) => dispatch(updateExerciseForm(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
    exerciseForm: state.ExerciseReducer.exerciseForm,
    categoryList: state.CategoryReducer.categoryList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseForm);
