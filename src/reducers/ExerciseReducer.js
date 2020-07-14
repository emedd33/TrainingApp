import { ADD_Exercise, DELETE_Exercise } from "../actions/Types";
import { INITIAL_STATE } from "../store";

const ExerciseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_Exercise:
      return {
        ...state,
        exerciseList: state.exerciseList.concat({
          name: action.data,
          avatar_url: null,
          subtitle: "",
        }),
      };
    case DELETE_Exercise:
      return {
        ...state,
        exerciseList: state.exerciseList.filter((item) => item.key !== key),
      };
    default:
      return state;
  }
};

export default ExerciseReducer;
