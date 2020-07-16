import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { List } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_ROUTINE,
  SET_SELECTED_ROUTINE,
} from "../../store/actions/Types";
import DeleteItemButton from "../atoms/DeleteItemButton";
const RoutineList = (props) => {
  const dispatch = useDispatch();
  const routineList = useSelector((state) =>
    state.RoutineReducer.routineList.map((routine) => (
      <View>
        <List.Item
          title={routine.name}
          key={routine.key}
          onPress={() => {
            dispatch({ type: SET_SELECTED_ROUTINE, data: routine });
            return props.navigation.navigate("RoutineDetail", {
              routine: routine,
            });
          }}
          left={() => <List.Icon color="#000" icon="folder" />}
          right={() => {
            return (
              <DeleteItemButton
                delete={() =>
                  dispatch({ type: DELETE_ROUTINE, data: routine.key })
                }
              />
            );
          }}
        />
      </View>
    ))
  );
  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>{props.subHeader}</List.Subheader>
        {routineList}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default RoutineList;
