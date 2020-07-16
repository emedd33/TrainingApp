import React, { useState, useCallback, useEffect } from "react";
import {
  addExercise,
  updateExerciseForm,
} from "../../store/actions/TypedActions";
import { View, Text, StyleSheet } from "react-native";
import { connect, useSelector, useDispatch } from "react-redux";
import DropDownPicker from "react-native-dropdown-picker";
import { UPDATE_EXERCISE_FORM } from "../../store/actions/Types";
const ExerciseChooseCategory = (props) => {
  const dispatch = useDispatch();
  const exerciseForm = useSelector(
    (state) => state.ExerciseReducer.exerciseForm
  );
  const categoryList = useSelector(
    (state) => state.CategoryReducer.categoryList
  );
  return (
    <DropDownPicker
      items={categoryList}
      containerStyle={{ height: 40 }}
      style={{ backgroundColor: "#fafafa" }}
      itemStyle={{
        justifyContent: "flex-start",
      }}
      dropDownStyle={{ backgroundColor: "#fafafa" }}
      onChangeItem={(category) =>
        dispatch({
          type: UPDATE_EXERCISE_FORM,
          data: { ...exerciseForm, category: category },
        })
      }
    />
  );
};

export default ExerciseChooseCategory;
