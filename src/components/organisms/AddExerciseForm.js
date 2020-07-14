import React, { useState } from "react";
import { addExercise } from "../../actions/TypedActions";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { TextInput, Button } from "react-native-paper";
const AddExerciseForm = (props) => {
  console.log(props);
  const [newExercise, setNewExercise] = React.useState("");
  return (
    <View>
      <TextInput
        value={newExercise}
        onChangeText={(text) => setNewExercise(text)}
      />
      <Button
        onPress={() => {
          props.addExercise(newExercise);
          setNewExercise("");
        }}
      >
        Add new
      </Button>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addExercise: (exercise) => dispatch(addExercise(exercise)),
  };
};

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExerciseForm);
