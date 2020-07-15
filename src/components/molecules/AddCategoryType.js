import React, { useState, useCallback, useEffect } from "react";
import { addExercise, updateExerciseForm } from "../../actions/TypedActions";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import DropDownPicker from "react-native-dropdown-picker";
const AddCategoryType = (props) => {
  const updateExerciseForm = (data) => {
    props.updateExerciseForm({ ...props.exerciseForm, ...data });
  };
  return (
    <DropDownPicker
      items={props.categoryList}
      containerStyle={{ height: 40 }}
      style={{ backgroundColor: "#fafafa" }}
      itemStyle={{
        justifyContent: "flex-start",
      }}
      dropDownStyle={{ backgroundColor: "#fafafa" }}
      onChangeItem={(item) =>
        updateExerciseForm({ category: item.value, hasSubmitted: false })
      }
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
    categoryList: state.CategoryReducer.categoryList,
    exerciseForm: state.ExerciseFormReducer.exerciseForm,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryType);
