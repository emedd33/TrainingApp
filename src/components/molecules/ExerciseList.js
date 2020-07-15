import { connect } from "react-redux";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { List, IconButton } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import DeleteExerciseButton from "../atoms/DeleteExerciseButton";
const ExerciseList = (props) => {
  const renderList = () => {
    return props.exerciseList.map((v, i) => (
      <List.Item
        title={v.name}
        key={v.key}
        left={() => <List.Icon color="#000" icon="folder" />}
        right={() => <DeleteExerciseButton index={v.key} />}
      />
    ));
  };
  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>My exercises</List.Subheader>
        {renderList()}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
  };
};

export default connect(mapStateToProps)(ExerciseList);
