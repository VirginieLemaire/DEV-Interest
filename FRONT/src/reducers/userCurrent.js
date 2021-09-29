import {
  ADD_BOOKMARK, CONNECT_USER, REMOVE_BOOKMARK, TOGGLE_LOGGED,
  USER_LOGOUT, CHANGE_CURRENT_USER_FIELD, SAVE_BOOKMARKED_CARDS,
} from '../action/userCurrent';

export const initialState = {
  id: '',
  email: '',
  username: '',
  password: '',
  newEmail: '',
  newPassword: '',
  newPasswordVerification: '',
  bookarmksId: [],
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
        password: '',
        bookmarksId: [],
        bookmarkedCards: [],
        isLogged: false,
      };
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarkedCards: [...state.bookmarkedCards, action.card],
      };

    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarkedCards: state.bookmarkedCards.filter((bookmark) => bookmark.id !== action.card.id),
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
    default:
      return state;
  }
};

export default reducer;
