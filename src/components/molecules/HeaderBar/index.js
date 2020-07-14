import { View, Text } from "react-native";
import React from "react";

const HeaderBar = (props) => {
  return (
    <View>
      <Text>{props.headerTitle}</Text>
    </View>
  );
};

export default HeaderBar;
