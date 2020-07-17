import React from "react";
import { StyleSheet, View } from "react-native";
import FloatingButton from "../components/atoms/FloatingButton";
import RoutineList from "../components/Routine/RoutineList";
import { useDispatch } from "react-redux";
import { ADD_ROUTINE } from "../store/actions/Types";

const RoutineScreen = (props) => {
  const dispatch = useDispatch();
  const addRoutine = () => dispatch({ type: ADD_ROUTINE });
  return (
    <View style={styles.container}>
      <RoutineList navigation={props.navigation} />
      <FloatingButton onPress={addRoutine} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default RoutineScreen;
