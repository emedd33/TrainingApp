import React from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-paper";
import { useSelector } from "react-redux";
const RoutineAddExerciseScreen = (props) => {
  const exerciseList = useSelector((state) =>
    state.ExerciseReducer.exerciseList.map((v, i) => {
      return { label: v.name, value: v.name };
    })
  );
  return (
    <View>
      <DropDownPicker
        items={exerciseList}
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

export default RoutineAddExerciseScreen;
