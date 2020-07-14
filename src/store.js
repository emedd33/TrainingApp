import { createStore, combineReducers } from "redux";
import ExerciseReducer from "./reducers/ExerciseReducer";

const rootReducer = combineReducers({
  ExerciseReducer: ExerciseReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
