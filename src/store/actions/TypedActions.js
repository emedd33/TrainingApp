import {
  ADD_EXERCISE,
  DELETE_EXERCISE,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_EXERCISE_FORM,
  DELETE_ROUTINE,
  ADD_ROUTINE,
  DELETE_ROUTINE_EXERCISE,
  ADD_ROUTINE_EXERCISE,
  CLEAN_EXERCISE_FORM,
  SET_SELECTED_ROUTINE,
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

export const cleanExerciseForm = () => ({
  type: CLEAN_EXERCISE_FORM,
});

export const deleteRoutine = (key) => ({
  type: DELETE_ROUTINE,
  data: key,
});

export const addRoutine = () => ({
  type: ADD_ROUTINE,
});

export const deleteRoutineExercise = (key) => ({
  type: DELETE_ROUTINE_EXERCISE,
  data: key,
});

export const addRoutineExercise = () => ({
  type: ADD_ROUTINE_EXERCISE,
});

export const setSelectedRoutine = (routine) => ({
  type: SET_SELECTED_ROUTINE,
  data: routine,
});
