import INITIAL_STATE from "../InitialState";
import {
  ADD_ROUTINE,
  DELETE_ROUTINE,
  DELETE_ROUTINE_EXERCISE,
  SET_SELECTED_ROUTINE,
  UPDATE_ROUTINE_EXERCISE_FORM,
  CLEAN_ROUTINE_EXERCISE_FORM,
  ADD_ROUTINE_EXERCISE,
} from "../actions/Types";

const RoutineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ROUTINE:
      // Check if there is not an populated list and sets index to 0
      // if the list is populated it takes the highest index value and adds one
      let key = !state.routineList[state.routineList.length - 1]
        ? 0
        : state.routineList[state.routineList.length - 1].key + 1;
      return {
        ...state,
        routineList: state.routineList.concat({
          name: "new routine",
          exercises: [],
          key: key,
        }),
      };
    case DELETE_ROUTINE:
      return {
        ...state,
        routineList: state.routineList.filter(
          (item) => item.key !== action.data
        ),
      };
    case DELETE_ROUTINE_EXERCISE:
      let updatedRoutineExercise = state.routineList[
        action.data.routineKey
      ].exercises.filter((item) => item.key !== action.data.exerciseKey);
      let newRoutineList = state.routineList;
      newRoutineList[action.data.routineKey].exercises = updatedRoutineExercise;
      return {
        ...state,
        routineList: newRoutineList,
        selectedRoutine: {
          ...state.selectedRoutine,
          exercises: updatedRoutineExercise,
        },
      };
    case SET_SELECTED_ROUTINE:
      return {
        ...state,
        selectedRoutine: action.data,
      };
    case UPDATE_ROUTINE_EXERCISE_FORM:
      return {
        ...state,
        routineExerciseForm: action.data,
      };
    case CLEAN_ROUTINE_EXERCISE_FORM:
      return {
        ...state,
        routineExerciseForm: INITIAL_STATE.routineExerciseForm,
      };
    case ADD_ROUTINE_EXERCISE:
      const updatedAddRoutineExercise = state.routineList[
        action.data.routineKey
      ].exercises.concat(action.data.exercises);
      let newAddRoutineList = state.routineList;
      newAddRoutineList[
        action.data.routineKey
      ].exercises = updatedAddRoutineExercise;
      return {
        ...state,
        routineList: newAddRoutineList,
        selectedRoutine: {
          ...state.selectedRoutine,
          exercises: updatedAddRoutineExercise,
        },
      };
    default:
      return state;
  }
};

export default RoutineReducer;
