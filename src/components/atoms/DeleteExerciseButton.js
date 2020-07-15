import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { List, IconButton } from "react-native-paper";
import { deleteExercise } from "../../actions/TypedActions";

const DeleteExerciseButton = (props) => {
  const [deleteItem, setDeleteItem] = useState(false);
  console.log(props);
  useEffect(() => {
    if (deleteItem) {
      props.deleteExercise(props.index);
    }
  }, [deleteItem]);
  return (
    <IconButton
      icon="delete"
      size={30}
      color="red"
      deleteExercise={props.deleteExercise}
      onPress={() => {
        setDeleteItem(true);
      }}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteExercise: (exercise) => dispatch(deleteExercise(exercise)),
  };
};
export default connect(null, mapDispatchToProps)(DeleteExerciseButton);
