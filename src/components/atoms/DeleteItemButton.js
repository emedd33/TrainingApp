import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { List, IconButton } from "react-native-paper";
import { deleteExercise } from "../../store/actions/TypedActions";

const DeleteItemButton = (props) => {
  const [deleteItem, setDeleteItem] = useState(false);
  useEffect(() => {
    if (deleteItem) {
      props.delete(props.index);
      setDeleteItem(false);
    }
  }, [deleteItem]);
  return (
    <IconButton
      icon="delete"
      size={30}
      color="red"
      deleteExercise={props.delete}
      onPress={() => {
        setDeleteItem(true);
      }}
    />
  );
};

export default DeleteItemButton;
