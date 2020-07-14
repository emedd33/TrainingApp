import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { showExerciseModal } from "../../actions/TypedActions";
import { connect } from "react-redux";

const AddExerciseButton = (props) => {
  return (
    <ActionButton
      buttonColor="rgba(231,76,60,1)"
      onPress={() => props.showModal(true)}
    >
      {/* <ActionButton.Item buttonColor="#9b59b6" title="New Task">
        <Icon name="md-create" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor="#3498db"
        title="Notifications"
        onPress={() => {}}
      >
        <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor="#1abc9c"
        title="All Tasks"
        onPress={() => {}}
      >
        <Icon name="md-done-all" style={styles.actionButtonIcon} />
      </ActionButton.Item> */}
    </ActionButton>
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
