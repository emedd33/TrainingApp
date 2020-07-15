import React from "react";

import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import FloatingRedirectButton from "../components/atoms/FloatingRedirectButton";
import ItemList from "../components/molecules/ItemList";

const RoutineDetailScreen = (props) => {
  console.log(props);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputText}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <ItemList
        list={[
          { name: "hei", key: 0 },
          { name: "deh", key: 1 },
        ]}
        subHeader="Exercises"
      />
      <FloatingRedirectButton
        redirect="AddExerciseToRoutine"
        navigation={props.navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputText: {
    textAlign: "center",
  },
});

export default RoutineDetailScreen;
