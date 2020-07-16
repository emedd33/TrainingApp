import React, { useEffect } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { connect } from "react-redux";
import { TextInput, Button } from "react-native-paper";
const RoutineAddExerciseScreen = (props) => {
  const itemList = props.exerciseList.map((v, i) => {
    return { label: v.name, value: v.name };
  });
  return (
    <View>
      <DropDownPicker
        items={itemList}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => console.log("pchanged")}
      />
      <View>
        <TextInput
          keyboardType="number-pad"
          // value={props.exerciseForm.exercise}
          placeholder="Write in number of sets"
          onChangeText={(text) => console.log("changed")}
        />
        <TextInput
          keyboardType="number-pad"
          // value={props.exerciseForm.exercise}
          placeholder="Write in number of reps"
          onChangeText={(text) => console.log("changed")}
        />
        <TextInput
          keyboardType="number-pad"
          // value={props.exerciseForm.exercise}
          placeholder="write in the tempo for reps"
          onChangeText={(text) => console.log("changed")}
        />
        <TextInput
          // value={props.exerciseForm.exercise}
          placeholder="Write in the break duration"
          onChangeText={(text) => console.log("changed")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
  };
};
export default connect(mapStateToProps)(RoutineAddExerciseScreen);
