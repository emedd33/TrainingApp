import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { connect } from "react-redux";
import { ListItem, Input } from "react-native-elements";

const ExerciseList = (props) => {
  const list = props.exerciseList;
  return (
    <View>
      {list.map((l, i) => (
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: l.avatar_url } }}
          title={l.name}
          subtitle={l.subtitle}
          bottomDivider
        />
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
  };
};

export default connect(mapStateToProps)(ExerciseList);
