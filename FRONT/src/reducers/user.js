import {
  CHANGE_FIELD, CONNECT_USER, SHOW_ADD_CARD_MODAL, SHOW_CONNEXION_MODAL, USER_LOGOUT, ADD_BOOKMARK, REMOVE_BOOKMARK,
} from '../action/user';

export const initialState = {
  search: '',
  connexionModal: false,
  email: '',
  password: '',
  username: 'Roger',
  isLogged: true,
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
        email: '',
        password: '',
        isLogged: false,
      };
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.card],
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark) => bookmark.id != action.card.id),
      }
    default:
      return state;
  }
};

export default reducer;
