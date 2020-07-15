import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ErrorMessage = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
export default ErrorMessage;
