import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

const FloatingRedirectButton = (props) => {
  return (
    <ActionButton
      buttonColor="rgba(231,76,60,1)"
      onPress={() => props.navigation.navigate(props.redirect)}
      hideShadow={true}
    ></ActionButton>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
    position: "absolute",
    bottom: 10,
  },
});
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (bool) => dispatch(showExerciseModal(bool)),
  };
};
export default connect(null, mapDispatchToProps)(FloatingRedirectButton);
