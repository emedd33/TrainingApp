import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { List, IconButton } from "react-native-paper";
import PropTypes from "prop-types";
import { deleteExercise } from "../../store/actions/TypedActions";

const DeleteItemButton = (props) => {
  return (
    <IconButton
      icon="delete"
      size={30}
      color="red"
      deleteExercise={props.delete}
      onPress={() => {
        if (props.delete) {
          props.delete();
        }
      }}
    />
  );
};

DeleteItemButton.prototype = {
  delete: PropTypes.object,
};
export default DeleteItemButton;
