import { CHANGE_UPDATE_USER_FIELD, RESET_UPDATE_USER_FIELDS } from "../action/userUpdate";

export const initialState = {
  username: '',
  email: '',
  passwordCurrent: '',
  passwordNew: '',
  passwordNewVerification: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_UPDATE_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case RESET_UPDATE_USER_FIELDS:
      return {
        ...state,
        username: '',
        email: '',
        passwordCurrent: '',
        passwordNew: '',
        passwordNewVerification: '',
      };
    default:
      return state;
  }
};

export default reducer;
