import { ADD_Exercise, DELETE_Exercise } from "./Types";

export const addFood = (Exercise) => ({
  type: ADD_Exercise,
  data: Exercise,
});

export const deleteExercise = (key) => ({
  type: DELETE_Exercise,
  key: key,
});
