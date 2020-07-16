import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { log } from "react-native-reanimated";
import {
  UPDATE_ROUTINE_EXERCISE_FORM,
  ADD_ROUTINE_EXERCISE,
} from "../store/actions/Types";
import ErrorMessage from "../components/atoms/ErrorMessage";
import { TouchableOpacity } from "react-native-gesture-handler";
const RoutineAddExerciseScreen = (props) => {
  const dispatch = useDispatch();
  const routineExerciseForm = useSelector(
    (state) => state.RoutineReducer.routineExerciseForm
  );
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [exerciseError, setExerciseError] = useState(true);
  const [setsError, setSetsError] = useState(true);
  const [repsError, setRepsError] = useState(true);
  const exerciseList = useSelector((state) =>
    state.ExerciseReducer.exerciseList.map((v, i) => {
      return { label: v.name, value: v.name };
    })
  );
  console.log(props.route);
  const submitForm = () => {
    setHasSubmitted(true);
    if (!exerciseError) {
      dispatch({
        type: ADD_ROUTINE_EXERCISE,
        data: {
          exercises: routineExerciseForm,
          routineKey: props.route.params.params.key,
        },
      });
      props.navigation.goBack();
    }
  };
  const isValidExerciseInForm = (item) => {
    setExerciseError(!item || item === "");
  };
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
        value={null}
        onChangeItem={(item) => {
          isValidExerciseInForm(item);
          dispatch({
            type: UPDATE_ROUTINE_EXERCISE_FORM,
            data: { ...routineExerciseForm, name: item.value },
          });
        }}
      />
      {hasSubmitted && exerciseError ? (
        <ErrorMessage message={"Please choose an exercise"} />
      ) : null}
      <View>
        <TextInput
          keyboardType="number-pad"
          placeholder="Write in number of sets"
          onChangeText={(number) => {
            setSetsError(false);
            dispatch({
              type: UPDATE_ROUTINE_EXERCISE_FORM,
              data: { ...routineExerciseForm, sets: number },
            });
          }}
        />
        {hasSubmitted && setsError ? (
          <ErrorMessage message={"Please choose a number of sets"} />
        ) : null}
        <TextInput
          keyboardType="number-pad"
          placeholder="Write in number of reps"
          onChangeText={(number) => {
            setRepsError(false);
            dispatch({
              type: UPDATE_ROUTINE_EXERCISE_FORM,
              data: { ...routineExerciseForm, reps: number },
            });
          }}
        />
        {hasSubmitted && repsError ? (
          <ErrorMessage message={"Please choose a number of reps"} />
        ) : null}
        <TextInput
          keyboardType="number-pad"
          placeholder="write in weight amount"
          onChangeText={(number) =>
            dispatch({
              type: UPDATE_ROUTINE_EXERCISE_FORM,
              data: { ...routineExerciseForm, weights: number },
            })
          }
        />
        <TextInput
          keyboardType="number-pad"
          placeholder="write in the tempo for reps"
          onChangeText={(number) =>
            dispatch({
              type: UPDATE_ROUTINE_EXERCISE_FORM,
              data: { ...routineExerciseForm, tempo: number },
            })
          }
        />
        <TextInput
          placeholder="Write in the break duration"
          onChangeText={(number) =>
            dispatch({
              type: UPDATE_ROUTINE_EXERCISE_FORM,
              data: { ...routineExerciseForm, break: number },
            })
          }
        />
        <TouchableOpacity>
          <Button onPress={() => submitForm()}>Press me</Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RoutineAddExerciseScreen;
