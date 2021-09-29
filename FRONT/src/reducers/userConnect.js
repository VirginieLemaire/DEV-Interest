import { CHANGE_CONNECTING_USER_FIELD, RESET_CONNECTING_FIELDS } from '../action/userConnect';

export const initialState = {
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONNECTING_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case RESET_CONNECTING_FIELDS:
      return {
        ...state,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default reducer;
