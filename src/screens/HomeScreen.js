import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

function HomeScreen(props) {
  return (
    <View style={page.container}>
      <Text>Home Screen</Text>

      <Button
        style={page.navigationButton}
        title="Go to Exercise"
        onPress={() => props.navigation.navigate("Exercise")}
      />
    </View>
  );
}
const page = StyleSheet.create({
  container: { flex: 1 },
  navigationButton: {
    margin: "auto",
  },
  inputButton: {
    margin: "auto",
  },
});

export default HomeScreen;