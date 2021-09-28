import {
  ADD_BOOKMARK, REMOVE_BOOKMARK,
} from '../action/userCurrent';

export const initialState = {
  id: '',
  email: '',
  username: '',
  bookarmksId: [],
  bookmarkedCards: [],
  darkMode: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarksCards: [...state.bookmarksCards, action.card],
      };

    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarksCards: state.bookmarksCards.filter((bookmark) => bookmark.id !== action.card.id),
      };
    default:
      return state;
  }
};

export default reducer;
