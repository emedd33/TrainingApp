import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderBar = (props) => {
  return (
    <TouchableOpacity onPress={() => console.log(props)}>
      <View>
        <Text>{props.headerTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderBar;
