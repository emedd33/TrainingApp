import INITIAL_STATE from "../InitialState";
import {
  ADD_ROUTINE,
  DELETE_ROUTINE,
  DELETE_ROUTINE_EXERCISE,
  SET_SELECTED_ROUTINE,
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
      const updatedRoutineExercise = state.routineList[
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

    default:
      return state;
  }
};

export default RoutineReducer;
