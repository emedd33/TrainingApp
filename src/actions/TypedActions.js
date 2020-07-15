import {
  ADD_EXERCISE,
  DELETE_EXERCISE,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_EXERCISE_FORM,
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
