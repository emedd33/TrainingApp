import React, { useState, useCallback, useEffect } from "react";
import { addExercise } from "../../actions/TypedActions";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { TextInput, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ErrorMessage from "../atoms/ErrorMessage";
const AddExerciseForm = (props) => {
  const [newExercise, setNewExercise] = useState("");
  const [error, setError] = useState({ isError: false, message: "" });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const submitExercise = () => {
    setHasSubmitted(true);
    console.log(hasSubmitted);
    if (!error.isError) {
      props.addExercise(newExercise);
      setNewExercise("");
      setError({ isError: false, message: "" });
      props.navigation.goBack();
    }
  };
  useEffect(() => {
    if (newExercise === "") {
      setError({ isError: true, message: "Please type in an exercise" });
    } else {
      setError({ isError: false, message: "" });
    }
  }, [newExercise]);
  return (
    <View>
      <TextInput
        value={newExercise}
        onChangeText={(text) => setNewExercise(text)}
        onSubmitEditing={() => {
          submitExercise();
          setHasSubmitted(true);
        }}
      />
      {error.isError && hasSubmitted ? (
        <ErrorMessage message={error.message} />
      ) : null}
      <Button
        onPress={() => {
          submitExercise();
          setHasSubmitted(true);
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
