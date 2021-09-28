import {
  ADD_BOOKMARK, CONNECT_USER, REMOVE_BOOKMARK, TOGGLE_LOGGED, USER_LOGOUT,
} from '../action/userCurrent';

export const initialState = {
  id: '',
  email: '',
  username: '',
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
    default:
      return state;
  }
};

export default reducer;
