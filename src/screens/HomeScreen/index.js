import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { connect } from "react-redux";

function HomeScreen(props) {
  return (
    <View style={page.container}>
      <Text style={page.title}>Home Screen</Text>

      <Button
        style={page.navigationButton}
        title="Go to Exercise"
        onPress={() => props.navigation.navigate("Exercise")}
      />
    </View>
  );
}
const page = StyleSheet.create({
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

export default HomeScreen;
