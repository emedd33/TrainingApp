import React from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { List } from "react-native-paper";
import AddExerciseButton from "../components/atoms/AddExerciseButton";

import { connect } from "react-redux";

function ExerciseScreen(props) {
  const renderList = () => {
    return props.exerciseList.map((v, i) => (
      <List.Item
        title={v.name}
        key={i}
        left={() => <List.Icon color="#000" icon="folder" />}
      />
    ));
  };
  return (
    <View style={page.container}>
      <List.Section>
        <List.Subheader>Some title</List.Subheader>
        {renderList()}
      </List.Section>
      <AddExerciseButton navigation={props.navigation} />
    </View>
  );
}
const page = StyleSheet.create({
  container: { flex: 1 },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseScreen);
