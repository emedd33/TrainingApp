import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

const AddExerciseButton = (props) => {
  return (
    <ActionButton
      buttonColor="rgba(231,76,60,1)"
      onPress={() => props.navigation.navigate("AddExercise")}
      hideShadow={true}
    ></ActionButton>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (bool) => dispatch(showExerciseModal(bool)),
  };
};
export default connect(null, mapDispatchToProps)(AddExerciseButton);
