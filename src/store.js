import { createStore, combineReducers } from "redux";
import ExerciseReducer from "./reducers/ExerciseReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import ExerciseFormReducer from "./reducers/ExerciseFormReducer";

const rootReducer = combineReducers({
  ExerciseReducer: ExerciseReducer,
  CategoryReducer: CategoryReducer,
  ExerciseFormReducer: ExerciseFormReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
