import React, { useState, useCallback, useEffect } from "react";
import {
  addExercise,
  updateExerciseForm,
} from "../../store/actions/TypedActions";
import { View, Text, StyleSheet } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { TextInput, Button } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import ErrorMessage from "../atoms/ErrorMessage";
import ExerciseAddNew from "./ExerciseAddNew";
import ExerciseChooseCategory from "./ExerciseChooseCategory";
import {
  CLEAN_EXERCISE_FORM,
  ADD_EXERCISE,
  UPDATE_EXERCISE_FORM,
} from "../../store/actions/Types";
const ExerciseForm = (props) => {
  const dispatch = useDispatch();
  const exerciseForm = useSelector(
    (state) => state.ExerciseReducer.exerciseForm
  );
  const exerciseList = useSelector(
    (state) => state.ExerciseReducer.exerciseList
  );
  const categoryList = useSelector(
    (state) => state.CategoryReducer.categoryList
  );
  const updateExerciseForm = (data) => {
    props.updateExerciseForm({ ...props.exerciseForm, ...data });
  };
  const submitExercise = () => {
    updateExerciseForm({ hasSubmitted: true });
    debugger;
    if (exerciseForm.error) {
      dispatch({ type: ADD_EXERCISE, data: exerciseForm.exercise });
      dispatch({ type: CLEAN_EXERCISE_FORM });
      props.navigation.goBack();
    }
  };
  useEffect(() => {
    if (props.exerciseForm.exercise === "") {
      dispatch({
        type: UPDATE_EXERCISE_FORM,
        data: {
          error: true,
          ErrorMessage: "Please type in an exercise",
        },
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
      <ExerciseChooseCategory />

      {exerciseForm.hasSubmitted && exerciseForm.error ? (
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
