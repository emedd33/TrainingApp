import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyleSheet, View, Text } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

const FloatingRedirectButton = (props) => {
  return (
    <ActionButton
      buttonColor="rgba(231,76,60,1)"
      onPress={() => {
        if (props.onPress) {
          return props.onPress();
        }
        if (props.redirect && props.navigation) {
          return props.navigation.navigate(props.redirect);
        }
      }}
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

FloatingRedirectButton.propTypes = {
  redirect: PropTypes.string,
  navigation: PropTypes.object,
  onPress: PropTypes.object,
};
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (bool) => dispatch(showExerciseModal(bool)),
  };
};
export default connect(null, mapDispatchToProps)(FloatingRedirectButton);
