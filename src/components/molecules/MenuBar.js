import React from "react";
import { Button } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const MenuBar = (props) => {
  return (
    <View style={styles.parentContainer}>
      <Text>Menu</Text>

      <TouchableOpacity
        style={styles.navigationButton}
        onPress={() => props.navigation.navigate("Exercise")}
      >
        <Text style={styles.navigationButtonText}>Exercises</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={() => props.navigation.navigate("Routine", { item: "name" })}
      >
        <Text style={styles.navigationButtonText}>Routines</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: { backgroundColor: "grey" },
  container: { backgroundColor: "white" },
  navigationButton: { display: "flex", padding: 10 },
  navigationButtonText: { fontSize: 30 },
});

export default MenuBar;
