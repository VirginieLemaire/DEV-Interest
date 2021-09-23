import { CHANGE_FIELD, SHOW_CONNEXION_MODAL, USER_LOGIN, USER_LOGOUT } from '../action/user';

export const initialState = {
  search: '',
  connexionModal: false,
  email: '',
  password: '',
  username: 'Roger',
  isLogged: false,
  bookmarks: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case SHOW_CONNEXION_MODAL:
      return {
        ...state,
        connexionModal: !state.connexionModal,
      };
    case USER_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default reducer;
