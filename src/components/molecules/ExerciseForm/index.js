import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import { connect } from "react-redux";
import AppModal from "../AppModal/AppModal";

const ExerciseForm = (props) => {
  const [newItem, setNewItem] = useState("");
  const [isOverlayVisible, setOverlayVisible] = useState(true);
  console.log(isOverlayVisible);
  const submitItem = () => {
    props.addFood(newItem);
    setNewItem("");
  };
  return (
    <View style={styles.container}>
      <Button title="press here" onPress={() => setOverlayVisible(true)} />
    </View>
  );
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
const mapDispatchToProps = (dispatch) => {
  return {
    addFood: (name) => dispatch(addFood(name)),
  };
};

export default connect(mapDispatchToProps)(ExerciseForm);
