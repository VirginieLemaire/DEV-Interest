import {
  ADD_BOOKMARK, CONNECT_USER, REMOVE_BOOKMARK, TOGGLE_LOGGED,
  USER_LOGOUT, CHANGE_CURRENT_USER_FIELD, SAVE_BOOKMARKED_CARDS, UPDATE_BOOKMARKS,
} from '../action/userCurrent';

export const initialState = {
  id: '',
  email: '',
  username: '',
  password: '',
  newEmail: '',
  newPassword: '',
  newPasswordVerification: '',
  bookmarks: [],
  bookmarkedCards: [],
  isLogged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT_USER:
      return {
        ...state,
        ...action.data,
      };
    case TOGGLE_LOGGED:
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    case USER_LOGOUT:
      return {
        ...state,
        id: '',
        email: '',
        username: '',
        password: '',
        bookmarks: [],
        isLogged: false,
      };
    case CHANGE_CURRENT_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case SAVE_BOOKMARKED_CARDS:
      return {
        ...state,
        bookmarkedCards: action.data,
      };
    case UPDATE_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
