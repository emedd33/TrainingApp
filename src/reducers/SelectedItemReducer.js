import INITIAL_STATE from "../InitialState";
import { SET_SELECTED_ITEM } from "../actions/Types";

const SelectedtemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.data,
      };
    default:
      return state;
  }
};

export default SelectedtemReducer;
