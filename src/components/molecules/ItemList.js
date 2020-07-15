import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import { List, IconButton } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import DeleteItemButton from "../atoms/DeleteItemButton";
import { setSelectedItem } from "../../actions/TypedActions";
const ItemList = (props) => {
  const renderList = () => {
    return props.list.map((v, i) => (
      <List.Item
        title={v.name}
        key={v.key}
        onPress={() => {
          if (props.itemNavigation) {
            props.setSelectedItem(v);
            return props.itemNavigation({ item: v });
          }
        }}
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
    ));
  };
  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>{props.subHeader}</List.Subheader>
        {renderList()}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

ItemList.propTypes = {
  list: PropTypes.array.isRequired,
  itemNavigation: PropTypes.func,
  deleteItemFunction: PropTypes.func,
};

const mapDispatchToState = (dispatch) => {
  return {
    setSelectedItem: (item) => dispatch(setSelectedItem(item)),
  };
};

export default connect(null, mapDispatchToState)(ItemList);
