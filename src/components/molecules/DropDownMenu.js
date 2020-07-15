import React, { useState, useCallback, useEffect } from "react";
import { addExercise, updateExerciseForm } from "../../actions/TypedActions";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import DropDownPicker from "react-native-dropdown-picker";
const DropDownMenu = (props) => {
  const updateForm = (data) => {
    props.update({ ...props.form, ...data });
  };
  return (
    <DropDownPicker
      items={props.items}
      containerStyle={{ height: 40 }}
      style={{ backgroundColor: "#fafafa" }}
      itemStyle={{
        justifyContent: "flex-start",
      }}
      dropDownStyle={{ backgroundColor: "#fafafa" }}
      onChangeItem={(item) =>
        updateForm({ category: item.value, hasSubmitted: false })
      }
    />
  );
};

export default DropDownMenu;
