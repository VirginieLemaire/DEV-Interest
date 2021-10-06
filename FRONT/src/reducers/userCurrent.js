import {
  CONNECT_USER, TOGGLE_LOGGED, UPDATE_THUMB,
  USER_LOGOUT, CHANGE_CURRENT_USER_FIELD, SAVE_BOOKMARKED_CARDS, 
  UPDATE_BOOKMARKS, SAVE_CONTRIBUTIONS,
} from '../action/userCurrent';

export const initialState = {
  id: '',
  email: '',
  username: '',
  password: '',
  newEmail: '',
  newPassword: '',
  newPasswordVerification: '',
  thumb: 'favorites',
  bookmarks: [],
  bookmarkedCards: [],
  contributions: [],
  isLogged: false,
  createdAt: '',
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
    case SAVE_CONTRIBUTIONS:
      return {
        ...state,
        contributions: action.data,
      };
    case UPDATE_THUMB:
      return {
        ...state,
        thumb: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
