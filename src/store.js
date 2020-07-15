import { createStore, combineReducers } from "redux";
import ExerciseReducer from "./reducers/ExerciseReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import ExerciseFormReducer from "./reducers/ExerciseFormReducer";
import RoutineReducer from "./reducers/RoutineReducer";

const rootReducer = combineReducers({
  ExerciseReducer: ExerciseReducer,
  CategoryReducer: CategoryReducer,
  ExerciseFormReducer: ExerciseFormReducer,
  RoutineReducer: RoutineReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
