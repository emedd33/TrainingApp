import { connect, useSelector, useDispatch } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import { List, IconButton } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import DeleteItemButton from "../atoms/DeleteItemButton";
import { DELETE_EXERCISE } from "../../store/actions/Types";

const ExerciseList = (props) => {
  const exerciseList = useSelector(
    (state) => state.ExerciseReducer.exerciseList
  );
  const dispatch = useDispatch();
  const renderExerciseList = () => {
    return exerciseList.map((v, i) => (
      <View>
        <List.Item
          title={v.name}
          key={v.key}
          onPress={() => props.navigation.navigate("ExerciseDetail")}
          left={() => <List.Icon color="#000" icon="flag" />}
          right={() => {
            return (
              <DeleteItemButton
                delete={() => dispatch({ type: DELETE_EXERCISE, data: v.key })}
              />
            );
          }}
        />
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>{props.subHeader}</List.Subheader>
        {renderExerciseList()}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
  };
};

export default connect(mapStateToProps)(ExerciseList);
