import { CHANGE_SEARCH_FIELD } from "../action/user";

export const initialState = {
  currentSearch: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        currentSearch: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
