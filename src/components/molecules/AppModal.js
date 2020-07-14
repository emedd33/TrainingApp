import React, { useState } from "react";
import { Button, Modal, Portal, Provider, Text } from "react-native-paper";
import { connect } from "react-redux";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { List } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import AddExerciseButton from "../atoms/AddExerciseButton";
import { showExerciseModal } from "../../actions/TypedActions";

const AppModal = (props) => {
  const renderList = () => {
    return props.exerciseList.map((v, i) => (
      <List.Item
        title={v.name}
        left={() => <List.Icon color="#000" icon="folder" />}
      />
    ));
  };
  return (
    <Provider>
      <Portal>
        <Modal
          visible={props.isModalViewable}
          onDismiss={() => props.showModal(false)}
          style={{ backgroundColor: "blue", height: "50%" }}
        >
          <View style={{}}>
            <Text>Example Modal</Text>
          </View>
        </Modal>

        {props.isModalViewable ? null : (
          <List.Section>
            <List.Subheader>Some title</List.Subheader>
            {renderList()}
          </List.Section>
        )}
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => props.showModal(true)}
        ></ActionButton>
      </Portal>
    </Provider>
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

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
    isModalViewable: state.ExerciseReducer.showExerciseModal,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModal);
