import { ADD_EXERCISE, DELETE_EXERCISE } from "../actions/Types";
import INITIAL_STATE from "../InitialState";

const ExerciseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      return {
        ...state,
        exerciseList: state.exerciseList.concat({
          name: action.data,
          avatar_url: null,
          subtitle: "",
        }),
      };
    case DELETE_EXERCISE:
      return {
        ...state,
        exerciseList: state.exerciseList.filter((item) => item.key !== key),
      };
    default:
      return state;
  }
};

export default ExerciseReducer;
