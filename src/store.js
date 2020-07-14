import { createStore, combineReducers } from "redux";
import ExerciseReducer from "./reducers/ExerciseReducer";

export const INITIAL_STATE = {
  exerciseList: [
    {
      name: "Pullups",
      subtitle: "Bodyweight",
    },
  ],
  showExerciseModal: false,
};

const rootReducer = combineReducers({
  ExerciseReducer: ExerciseReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
