import INITIAL_STATE from "../InitialState";
import { ADD_CATEGORY, DELETE_CATEGORY } from "../actions/Types";

const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categoryList: state.category.concat({ name: action.data }),
      };
    default:
      return state;
  }
};

export default CategoryReducer;
