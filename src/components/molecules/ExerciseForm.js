import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import { connect } from "react-redux";
import AppModal from "./AppModal";

const ExerciseForm = (props) => {
  const [newItem, setNewItem] = useState("");
  const submitItem = () => {
    props.addFood(newItem);
    setNewItem("");
  };
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "red" },
  title: {
    textAlign: "center",
    fontSize: "2rem",
  },
  navigationButton: {
    margin: "auto",
  },
  inputButton: {
    margin: "auto",
  },
});

export default connect(mapDispatchToProps)(ExerciseForm);
