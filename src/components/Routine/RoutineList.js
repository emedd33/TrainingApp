import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import { List, IconButton } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import DeleteItemButton from "../atoms/DeleteItemButton";
const RoutineList = (props) => {
  const renderRoutineList = () => {
    return props.routineList.map((v, i) => (
      <View>
        <List.Item
          title={v.name}
          key={v.key}
          onPress={() =>
            props.navigation.navigate("RoutineDetail", { routine: v })
          }
          left={() => <List.Icon color="#000" icon="folder" />}
          right={() => {
            if (props.deleteItemFunction) {
              return (
                <DeleteItemButton
                  index={v.key}
                  delete={props.deleteItemFunction}
                />
              );
            }
          }}
        />
      </View>
    ));
  };
  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>{props.subHeader}</List.Subheader>
        {renderRoutineList()}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

const mapStateToProps = (state) => {
  return {
    routineList: state.RoutineReducer.routineList,
  };
};

export default connect(mapStateToProps)(RoutineList);
