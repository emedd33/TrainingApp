import { createStore, combineReducers } from "redux";
import ExerciseReducer from "./reducers/ExerciseReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import ExerciseFormReducer from "./reducers/ExerciseFormReducer";
import RoutineReducer from "./reducers/RoutineReducer";
import SelectedItemReducer from "./reducers/SelectedItemReducer";

const rootReducer = combineReducers({
  ExerciseReducer: ExerciseReducer,
  CategoryReducer: CategoryReducer,
  ExerciseFormReducer: ExerciseFormReducer,
  RoutineReducer: RoutineReducer,
  SelectedItemReducer: SelectedItemReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
