import { CHANGE_NEW_USER_FIELD, RESET_NEW_USER_FIELDS } from '../action/userCreate';

export const initialState = {
  username: '',
  email: '',
  password: '',
  passwordVerification: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NEW_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case RESET_NEW_USER_FIELDS:
      return {
        ...state,
        username: '',
        email: '',
        password: '',
        passwordVerification: '',
      };
    default:
      return state;
  }
};

export default reducer;
