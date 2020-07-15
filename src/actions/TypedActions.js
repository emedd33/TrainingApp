import {
  ADD_EXERCISE,
  DELETE_EXERCISE,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_EXERCISE_FORM,
  DELETE_ROUTINE,
  ADD_ROUTINE,
  SET_SELECTED_ITEM,
} from "./Types";

export const addExercise = (Exercise) => ({
  type: ADD_EXERCISE,
  data: Exercise,
});

export const deleteExercise = (key) => ({
  type: DELETE_EXERCISE,
  data: key,
});

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  data: category,
});

export const deleteCategory = (key) => ({
  type: DELETE_CATEGORY,
  data: key,
});

export const updateExerciseForm = (data) => ({
  type: UPDATE_EXERCISE_FORM,
  data: data,
});

export const deleteRoutine = (key) => ({
  type: DELETE_ROUTINE,
  data: key,
});

export const addRoutine = (routine) => ({
  type: ADD_ROUTINE,
  data: routine,
});

export const setSelectedItem = (item) => ({
  type: SET_SELECTED_ITEM,
  data: item,
});
