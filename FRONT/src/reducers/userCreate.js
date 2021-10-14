import {
  CHANGE_NEW_USER_FIELD, PASSWORD_MATCH, RESET_NEW_USER_FIELDS, SET_AVAIL,
} from '../action/userCreate';

export const initialState = {
  username: '',
  usernameAvailability: true,
  emailAvailability: true,
  email: '',
  password: '',
  passwordVerification: '',
  passwordMatchValue: false,
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
    case SET_AVAIL:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case PASSWORD_MATCH:
      return {
        ...state,
        passwordMatchValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
