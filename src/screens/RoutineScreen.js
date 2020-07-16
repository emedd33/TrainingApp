import React from "react";
import { StyleSheet, View } from "react-native";
import FloatingButton from "../components/atoms/FloatingButton";
import RoutineList from "../components/Routine/RoutineList";

const RoutineScreen = (props) => {
  return (
    <View style={styles.container}>
      <RoutineList navigation={props.navigation} />
      <FloatingButton onPress={props.addRoutine} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default RoutineScreen;
