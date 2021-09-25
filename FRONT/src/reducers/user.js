import {
  CHANGE_FIELD, CHANGE_NEW_USER_FIELD, CONNECT_USER, SHOW_ADD_CARD_MODAL, SHOW_CONNEXION_MODAL, SHOW_SIGNUP_MODAL, USER_LOGOUT,
} from '../action/user';

export const initialState = {
  search: '',
  connexionModal: false,
  addCardModal: false,
  email: '',
  password: '',
  username: 'Roger',
  isLogged: false,
  bookmarks: [],
  addCardLinkField: '',
  hasAnAccount: true,
  newUser: {
    username: '',
    email: '',
    password: '',
    passwordVerification: '',
  },
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
        hasAnAccount: !state.connexionModal,
      };
    case SHOW_ADD_CARD_MODAL:
      return {
        ...state,
        addCardModal: !state.addCardModal,
      };
    case CONNECT_USER:
      return {
        ...state,
        ...action.data,
        email: '',
        password: '',
        isLogged: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    case SHOW_SIGNUP_MODAL:
      return {
        ...state,
        hasAnAccount: !state.hasAnAccount,
      };
    case CHANGE_NEW_USER_FIELD:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          [action.fieldName]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
