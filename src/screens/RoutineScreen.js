import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FloatingRedirectButton from "../components/atoms/FloatingRedirectButton";
import ItemList from "../components/molecules/ItemList";
import { connect } from "react-redux";
import { deleteRoutine } from "../actions/TypedActions";

const RoutineScreen = (props) => {
  return (
    <View style={styles.container}>
      <ItemList
        list={props.routineList}
        subHeader="My routines"
        deleteFunction={props.deleteRoutine}
        itemNavigation={() => props.navigation.navigate("RoutineDetail")}
      />
      <FloatingRedirectButton
        navigation={props.navigation}
        redirect={"AddRoutine"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
const mapDispatchToProps = (dispatch) => {
  return {
    deleteRoutine: (key) => dispatch(deleteRoutine(key)),
  };
};

const mapStateToProps = (state) => {
  return {
    routineList: state.RoutineReducer.routineList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RoutineScreen);
