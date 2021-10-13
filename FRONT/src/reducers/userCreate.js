import { CHANGE_NEW_USER_FIELD, RESET_NEW_USER_FIELDS, SET_AVAIL } from '../action/userCreate';

export const initialState = {
  username: '',
  usernameAvailability: true,
  emailAvailability: true,
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
    case SET_AVAIL:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
