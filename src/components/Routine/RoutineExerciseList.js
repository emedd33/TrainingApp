import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { List, IconButton } from "react-native-paper";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import DeleteItemButton from "../atoms/DeleteItemButton";

const RoutineExerciseList = (props) => {
  const renderExerciseList = () => {
    return props.exerciseList.map((v, i) => (
      <View key={i} style={styles.container}>
        <List.Item
          title={v.name}
          key={v.key}
          onPress={() => console.log("pressed")}
          left={() => <List.Icon color="#000" icon="flag" />}
          right={() => {
            return (
              <DeleteItemButton
                index={v.key}
                delete={props.deleteItemFunction}
              />
            );
          }}
        />
        <View style={styles.subContainer}>
          <Text>reps: {v.rep}</Text>
          <Text>sets: {v.sets}</Text>
          <Text>tempo: {v.tempo}</Text>
          <Text>break: {v.break} second</Text>
        </View>
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
  container: {
    flex: 1,
    margin: 10,
    borderStyle: "solid",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RoutineExerciseList;
