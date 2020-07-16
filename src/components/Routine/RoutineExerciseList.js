import { connect, useSelector, useDispatch } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { List, IconButton } from "react-native-paper";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import DeleteItemButton from "../atoms/DeleteItemButton";
import { DELETE_ROUTINE_EXERCISE } from "../../store/actions/Types";

const RoutineExerciseList = (props) => {
  const dispatch = useDispatch();
  const selectedRoutine = useSelector(
    (state) => state.RoutineReducer.selectedRoutine
  );
  const exerciseList = useSelector((state) =>
    state.RoutineReducer.selectedRoutine.exercises.map((exercise, index) => (
      <View key={index} style={styles.container}>
        <List.Item
          title={exercise.name}
          key={exercise.key}
          onPress={() => console.log("pressed")}
          left={() => <List.Icon color="#000" icon="flag" />}
          right={() => {
            return (
              <DeleteItemButton
                delete={() =>
                  dispatch({
                    type: DELETE_ROUTINE_EXERCISE,
                    data: {
                      exerciseKey: exercise.key,
                      routineKey: selectedRoutine.key,
                    },
                  })
                }
              />
            );
          }}
        />
        <View style={styles.subContainer}>
          <Text>reps: {exercise.rep}</Text>
          <Text>sets: {exercise.sets}</Text>
          <Text>tempo: {exercise.tempo}</Text>
          <Text>break: {exercise.break} second</Text>
        </View>
      </View>
    ))
  );
  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>{props.subHeader}</List.Subheader>
        {exerciseList}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderStyle: "solid",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RoutineExerciseList;
