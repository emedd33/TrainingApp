import INITIAL_STATE from "../InitialState";
import { UPDATE_EXERCISE_FORM } from "../actions/Types";

const ExerciseFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EXERCISE_FORM:
      return {
        ...state,
        exerciseForm: action.data,
      };
    default:
      return state;
  }
};

export default ExerciseFormReducer;
