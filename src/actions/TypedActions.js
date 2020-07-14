import { ADD_EXERCISE, DELETE_EXERCISE, SHOW_EXERCISE_MODAL } from "./Types";

export const addFood = (Exercise) => ({
  type: ADD_EXERCISE,
  data: Exercise,
});

export const deleteExercise = (key) => ({
  type: DELETE_EXERCISE,
  key: key,
});
