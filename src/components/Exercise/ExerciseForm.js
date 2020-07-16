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
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const submitExercise = () => {
    setHasSubmitted(true);
    if (!exerciseForm.error) {
      dispatch({ type: ADD_EXERCISE, data: exerciseForm.exercise });
      dispatch({ type: CLEAN_EXERCISE_FORM });
      props.navigation.goBack();
    }
  };
  useEffect(() => {
    setHasSubmitted(false);
    if (exerciseForm.exercise === "") {
      dispatch({
        type: UPDATE_EXERCISE_FORM,
        data: {
          ...exerciseForm,
          error: true,
          ErrorMessage: "Please type in an exercise",
        },
      });
      return;
    }
    if (exerciseForm.category === "") {
      dispatch({
        type: UPDATE_EXERCISE_FORM,
        data: {
          ...exerciseForm,
          error: true,
          errorMessage: "Please choose a category",
        },
      });
      return;
    }
    dispatch({
      type: UPDATE_EXERCISE_FORM,
      data: {
        ...exerciseForm,
        error: false,
        errorMessage: "",
      },
    });
  }, [exerciseForm.exercise, exerciseForm.category]);
  return (
    <View>
      <ExerciseAddNew />
      <ExerciseChooseCategory />

      {hasSubmitted && exerciseForm.error ? (
        <ErrorMessage message={exerciseForm.ErrorMessage} />
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
