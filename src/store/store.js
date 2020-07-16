import { createStore, combineReducers } from "redux";
import ExerciseReducer from "./reducers/ExerciseReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import RoutineReducer from "./reducers/RoutineReducer";

const rootReducer = combineReducers({
  ExerciseReducer: ExerciseReducer,
  CategoryReducer: CategoryReducer,
  RoutineReducer: RoutineReducer,
});

const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
