import { ADD_EXERCISE, DELETE_EXERCISE } from "../actions/Types";
import INITIAL_STATE from "../InitialState";

const ExerciseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      // Check if there is not an populated list and sets index to 0
      // if the list is populated it takes the highest index value and adds one
      let key = !state.exerciseList[state.exerciseList.length - 1]
        ? 0
        : state.exerciseList[state.exerciseList.length - 1].key + 1;
      return {
        ...state,
        exerciseList: state.exerciseList.concat({
          name: action.data,
          subtitle: "",
          key: key,
        }),
      };
    case DELETE_EXERCISE:
      return {
        ...state,
        exerciseList: state.exerciseList.filter(
          (item) => item.key !== action.data
        ),
      };
    default:
      return state;
  }
};

export default ExerciseReducer;
